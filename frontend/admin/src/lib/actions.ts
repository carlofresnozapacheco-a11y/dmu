
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { collection, addDoc, doc, setDoc, updateDoc, deleteDoc, getDocs, query as firestoreQuery, where, writeBatch, limit } from 'firebase/firestore';
import { db } from './firebase';
import { CreateDeviceSchema, DeviceSchema, DeviceOwnerSchema, OwnerDeviceSchema, DeviceUserSchema, DeviceModelSchema } from './schemas';
import type { Device, DeviceOwner } from './definitions';
import { getAllDeviceModels, getAllDevices } from './data';

export type FormState = {
  message: string;
  success?: boolean;
  errors?: {
    serialNumber?: string[];
    modelNumber?: string[];
    deviceType?: string[];
    status?: string[];
    manufacturedDate?: string[];
    name?: string[];
    address?: string[];
    email?: string[];
    socialMediaUrl?: string[];
    phoneNumber?: string[];
    deviceId?: string[];
    activatedDate?: string[];
    chargePerKwh?: string[];
    chargePerMinute?: string[];
    deactivatedReason?: string[];
    maintenanceReason?: string[];
    photoUrl?: string[];
    deviceModel?: string[];
    feature?: string[];
    assignmentType?: string[];
  };
  fields?: Record<string, string>;
};

export async function createDevice(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = CreateDeviceSchema.safeParse({
    serialNumber: formData.get('serialNumber'),
    modelNumber: formData.get('modelNumber'),
    deviceType: formData.get('deviceType'),
    status: 'manufactured', // Always manufactured on creation
    manufacturedDate: formData.get('manufacturedDate'),
    deactivatedReason: formData.get('deactivatedReason'),
    maintenanceReason: formData.get('maintenanceReason'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Failed to create device. Please check the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { serialNumber, modelNumber, deviceType, status, manufacturedDate, maintenanceReason, deactivatedReason } = validatedFields.data;

  try {
    const devicesRef = collection(db, 'devices');
    const q = firestoreQuery(devicesRef, where('serialNumber', '==', serialNumber));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return {
            success: false,
            message: 'Failed to create device. A device with this serial number already exists.',
            errors: { serialNumber: ['This serial number is already in use.'] },
        };
    }
    
    const newDeviceData = {
      serialNumber,
      modelNumber,
      deviceType,
      status: status || 'manufactured',
      manufacturedDate,
      lastMaintenance: new Date().toISOString().split('T')[0],
      maintenanceReason: status === 'maintenance' ? maintenanceReason : null,
      deactivatedReason: status === 'deactivated' ? deactivatedReason : null,
      ownerId: null,
    };

    await addDoc(devicesRef, newDeviceData);

  } catch (error) {
    console.error('Create device error:', error);
    return { success: false, message: 'Database Error: Failed to Create Device.' };
  }

  revalidatePath('/devices');
  redirect('/devices');
}

export async function updateDevice(id: string, prevState: FormState, formData: FormData): Promise<FormState> {
    const page = formData.get('page') as string || '1';

    const validatedFields = DeviceSchema.safeParse({
        serialNumber: formData.get('serialNumber'),
        modelNumber: formData.get('modelNumber'),
        deviceType: formData.get('deviceType'),
        status: formData.get('status'),
        manufacturedDate: formData.get('manufacturedDate'),
        deactivatedReason: formData.get('deactivatedReason'),
        maintenanceReason: formData.get('maintenanceReason'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to update device. Please check the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const data = { ...validatedFields.data };
    
    delete (data as Partial<typeof data>).serialNumber;
    
    const updates: any = {
      ...data,
      lastMaintenance: new Date().toISOString().split('T')[0],
    };

    if (updates.status !== 'maintenance') {
        updates.maintenanceReason = null;
    }
    if (updates.status !== 'deactivated') {
        updates.deactivatedReason = null;
    }
    
    if (['available', 'unassigned'].includes(updates.status)) {
        updates.ownerId = null;
    }


    try {
        const deviceRef = doc(db, 'devices', id);
        await updateDoc(deviceRef, updates);
    } catch (error) {
        console.error('Update failed:', error);
        return { success: false, message: 'Database Error: Failed to Update Device.' };
    }

    const backPath = formData.get('backHref') as string || `/devices?page=${page}`;
    
    revalidatePath('/devices');
    revalidatePath(`/devices/${id}`);

    if (backPath.startsWith('/devices?')) {
        redirect(backPath);
    } else {
        redirect(`/devices?page=${page}`);
    }
}


export async function deleteDevice(id: string) {
  try {
    const deviceRef = doc(db, 'devices', id);
    await deleteDoc(deviceRef);
    revalidatePath('/devices');
    return { message: 'Device deleted successfully.', success: true };
  } catch (error) {
    return { message: 'An error occurred while deleting the device.', success: false };
  }
}

export async function deleteAllDevices() {
    try {
        const batchSize = 500;

        // Delete all device assignments
        const assignmentsCollection = collection(db, 'owners-devices');
        const assignmentsSnapshot = await getDocs(assignmentsCollection);
        if (!assignmentsSnapshot.empty) {
            let i = 0;
            let assignmentBatch = writeBatch(db);
            for (const doc of assignmentsSnapshot.docs) {
                assignmentBatch.delete(doc.ref);
                i++;
                if (i % batchSize === 0) {
                    await assignmentBatch.commit();
                    assignmentBatch = writeBatch(db);
                }
            }
            if (i % batchSize !== 0) {
                await assignmentBatch.commit();
            }
        }

        // Delete all devices
        const devicesCollection = collection(db, 'devices');
        const devicesSnapshot = await getDocs(devicesCollection);
        if (!devicesSnapshot.empty) {
            let i = 0;
            let deviceBatch = writeBatch(db);
            for (const doc of devicesSnapshot.docs) {
                deviceBatch.delete(doc.ref);
                i++;
                if (i % batchSize === 0) {
                    await deviceBatch.commit();
                    deviceBatch = writeBatch(db);
                }
            }
             if (i % batchSize !== 0) {
                await deviceBatch.commit();
            }
        }

        revalidatePath('/devices');
        revalidatePath('/device-owners');
        return { message: 'All devices and their assignments have been deleted.', success: true };
    } catch (error) {
        console.error('Error deleting all devices:', error);
        return { message: 'Database Error: Failed to delete all devices.', success: false };
    }
}

export async function generateSampleDevices() {
    const deviceTypes = ['kwh-meter', 'timer', 'kwh-meter-timer'] as const;
    const statuses = ['available', 'offline', 'maintenance'] as const;
    const totalDevicesToGenerate = 100;
    const batchSize = 500; // Firestore batch limit
  
    try {
        for (let i = 0; i < totalDevicesToGenerate; i += batchSize) {
            const batch = writeBatch(db);
            const devicesRef = collection(db, 'devices');
            const end = Math.min(i + batchSize, totalDevicesToGenerate);

            for (let j = i; j < end; j++) {
                const newDeviceRef = doc(devicesRef);
                const manufacturedDate = new Date(
                new Date().getTime() - Math.random() * 3 * 365 * 24 * 60 * 60 * 1000
                ).toISOString().split('T')[0];
                
                batch.set(newDeviceRef, {
                serialNumber: `SN-${Math.random().toString(36).substring(2, 15).toUpperCase()}`,
                modelNumber: `MOD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                deviceType: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],
                status: statuses[Math.floor(Math.random() * statuses.length)],
                manufacturedDate,
                lastMaintenance: new Date(
                    new Date(manufacturedDate).getTime() + Math.random() * (new Date().getTime() - new Date(manufacturedDate).getTime())
                ).toISOString().split('T')[0],
                });
            }
            await batch.commit();
        }

    } catch (error) {
      console.error("Database Error: Failed to Generate Sample Devices.", error);
      return { message: 'Database Error: Failed to Generate Sample Devices.' };
    }
  
    revalidatePath('/devices');
}

export async function createDeviceOwner(_prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        name: formData.get('name'),
        address: formData.get('address'),
        email: formData.get('email'),
        socialMediaUrl: formData.get('socialMediaUrl'),
        phoneNumber: formData.get('phoneNumber'),
    };

    const validatedFields = DeviceOwnerSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
          success: false,
          message: 'Failed to create device owner. Please check the errors below.',
          errors: validatedFields.error.flatten().fieldErrors,
          fields: rawFormData as Record<string, string>,
        };
    }

    const { name, email, phoneNumber, socialMediaUrl } = validatedFields.data;

    try {
        const ownersRef = collection(db, 'device-owners');
        const qName = firestoreQuery(ownersRef, where('name', '==', name));
        const qEmail = firestoreQuery(ownersRef, where('email', '==', email));
        const qPhone = firestoreQuery(ownersRef, where('phoneNumber', '==', phoneNumber));
        const qSocial = firestoreQuery(ownersRef, where('socialMediaUrl', '==', socialMediaUrl));

        if (!(await getDocs(qName)).empty) {
            return { success: false, message: 'This name is already in use.', errors: { name: ['Name must be unique.'] }, fields: rawFormData as Record<string, string> };
        }
        if (!(await getDocs(qEmail)).empty) {
            return { success: false, message: 'This email is already in use.', errors: { email: ['Email must be unique.'] }, fields: rawFormData as Record<string, string> };
        }
        if (phoneNumber && !(await getDocs(qPhone)).empty) {
            return { success: false, message: 'This phone number is already in use.', errors: { phoneNumber: ['Phone number must be unique.'] }, fields: rawFormData as Record<string, string> };
        }
        if (!(await getDocs(qSocial)).empty) {
            return { success: false, message: 'This social media URL is already in use.', errors: { socialMediaUrl: ['Social media URL must be unique.'] }, fields: rawFormData as Record<string, string> };
        }

        await addDoc(ownersRef, validatedFields.data);
    } catch (error) {
        return { success: false, message: 'Database Error: Failed to Create Device Owner.', fields: rawFormData as Record<string, string> };
    }

    revalidatePath('/device-owners');
    redirect('/device-owners');
}

export async function updateDeviceOwner(id: string, _prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        name: formData.get('name'),
        address: formData.get('address'),
        email: formData.get('email'),
        socialMediaUrl: formData.get('socialMediaUrl'),
        phoneNumber: formData.get('phoneNumber'),
    };

    const page = formData.get('page') as string || '1';

    const validatedFields = DeviceOwnerSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
          success: false,
          message: 'Failed to update device owner. Please check the errors below.',
          errors: validatedFields.error.flatten().fieldErrors,
          fields: rawFormData as Record<string, string>,
        };
    }

    const { name, email, phoneNumber, socialMediaUrl } = validatedFields.data;
    
    try {
        const ownersRef = collection(db, 'device-owners');
        const qName = firestoreQuery(ownersRef, where('name', '==', name));
        const qEmail = firestoreQuery(ownersRef, where('email', '==', email));
        const qPhone = firestoreQuery(ownersRef, where('phoneNumber', '==', phoneNumber));
        const qSocial = firestoreQuery(ownersRef, where('socialMediaUrl', '==', socialMediaUrl));

        const nameSnapshot = await getDocs(qName);
        if (!nameSnapshot.empty && nameSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This name is already in use.', errors: { name: ['Name must be unique.'] }, fields: rawFormData as Record<string, string> };
        }
        const emailSnapshot = await getDocs(qEmail);
        if (!emailSnapshot.empty && emailSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This email is already in use.', errors: { email: ['Email must be unique.'] }, fields: rawFormData as Record<string, string> };
        }
        if (phoneNumber) {
            const phoneSnapshot = await getDocs(qPhone);
            if (!phoneSnapshot.empty && phoneSnapshot.docs[0].id !== id) {
                return { success: false, message: 'This phone number is already in use.', errors: { phoneNumber: ['Phone number must be unique.'] }, fields: rawFormData as Record<string, string> };
            }
        }
        const socialSnapshot = await getDocs(qSocial);
        if (!socialSnapshot.empty && socialSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This social media URL is already in use.', errors: { socialMediaUrl: ['Social media URL must be unique.'] }, fields: rawFormData as Record<string, string> };
        }

        const ownerRef = doc(db, 'device-owners', id);
        await updateDoc(ownerRef, validatedFields.data);
    } catch (error) {
        return { success: false, message: 'Database Error: Failed to Update Device Owner.', fields: rawFormData as Record<string, string> };
    }

    revalidatePath('/device-owners');
    revalidatePath(`/device-owners/${id}`);
    redirect(`/device-owners?page=${page}`);
}

export async function deleteDeviceOwner(id: string) {
    try {
        const ownerRef = doc(db, 'device-owners', id);
        await deleteDoc(ownerRef);
        revalidatePath('/device-owners');
        return { message: 'Device owner deleted successfully.', success: true };
    } catch (error) {
        return { message: 'An error occurred while deleting the device owner.', success: false };
    }
}

export async function deleteAllDeviceOwners() {
    try {
        const batchSize = 500;

        // 1. Find all assignments and devices to update
        const assignmentsSnapshot = await getDocs(collection(db, 'owners-devices'));
        const deviceIdsToUpdate: string[] = [];
        assignmentsSnapshot.forEach(doc => {
            deviceIdsToUpdate.push(doc.data().deviceId);
        });

        // Batch delete assignments
        if (!assignmentsSnapshot.empty) {
            let i = 0;
            let assignmentBatch = writeBatch(db);
            for (const doc of assignmentsSnapshot.docs) {
                assignmentBatch.delete(doc.ref);
                i++;
                if (i % batchSize === 0) {
                    await assignmentBatch.commit();
                    assignmentBatch = writeBatch(db);
                }
            }
            if (i % batchSize !== 0) {
                await assignmentBatch.commit();
            }
        }

        // Batch update devices to be unassigned
        if (deviceIdsToUpdate.length > 0) {
            let i = 0;
            let deviceBatch = writeBatch(db);
            for (const deviceId of deviceIdsToUpdate) {
                const deviceRef = doc(db, 'devices', deviceId);
                deviceBatch.update(deviceRef, { ownerId: null, status: 'available' });
                i++;
                if (i % batchSize === 0) {
                    await deviceBatch.commit();
                    deviceBatch = writeBatch(db);
                }
            }
            if (i % batchSize !== 0) {
                await deviceBatch.commit();
            }
        }
        
        // 3. Delete all owners
        const ownersSnapshot = await getDocs(collection(db, 'device-owners'));
        if (!ownersSnapshot.empty) {
            let i = 0;
            let ownerBatch = writeBatch(db);
            for (const doc of ownersSnapshot.docs) {
                ownerBatch.delete(doc.ref);
                i++;
                if (i % batchSize === 0) {
                    await ownerBatch.commit();
                    ownerBatch = writeBatch(db);
                }
            }
            if (i % batchSize !== 0) {
                await ownerBatch.commit();
            }
        }

        revalidatePath('/device-owners');
        revalidatePath('/devices');
        return { message: 'All owners and assignments deleted.', success: true };
    } catch (error) {
        console.error('Error deleting all owners:', error);
        return { message: 'Database Error: Failed to delete all owners.', success: false };
    }
}


export async function generateSampleDeviceOwners() {
    const firstNames = ['John', 'Jane', 'Peter', 'Mary', 'David', 'Susan', 'Michael', 'Linda', 'James', 'Patricia', 'Robert', 'Jennifer', 'William', 'Elizabeth', 'Richard', 'Jessica', 'Joseph', 'Sarah', 'Charles', 'Karen'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
    const generatedNames = new Set<string>();

    try {
        // Step 1: Create 50 new owners
        const ownerBatch = writeBatch(db);
        const ownersRef = collection(db, 'device-owners');
        const newOwnerIds: string[] = [];
        for (let i = 0; i < 50; i++) {
            const newOwnerRef = doc(ownersRef);
            newOwnerIds.push(newOwnerRef.id);
            
            let name: string;
            let firstName: string;
            let lastName: string;

            do {
                firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                name = `${firstName} ${lastName}`;
            } while (generatedNames.has(name));

            generatedNames.add(name);

            const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;

            ownerBatch.set(newOwnerRef, {
                name: name,
                address: `${i + 1} Sample Street, City, Country`,
                email: email,
                socialMediaUrl: `https://example.com/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
                phoneNumber: `+63917${(Math.floor(Math.random() * 9000000) + 1000000).toString()}`,
            });
        }
        await ownerBatch.commit();

        // Step 2: Fetch available devices
        const availableDevicesQuery = firestoreQuery(collection(db, 'devices'), where('status', 'in', ['available', 'manufactured', 'unassigned']), limit(100));
        const availableDevicesSnapshot = await getDocs(availableDevicesQuery);
        const availableDevices = availableDevicesSnapshot.docs.map(d => ({ id: d.id, ...d.data() } as Device));

        // Step 3: Assign available devices to the newly created owners
        if (availableDevices.length > 0 && newOwnerIds.length > 0) {
            const assignmentBatch = writeBatch(db);
            const assignmentsRef = collection(db, 'owners-devices');
            
            const assignmentsToCreate = Math.min(availableDevices.length, newOwnerIds.length);

            for (let i = 0; i < assignmentsToCreate; i++) {
                const device = availableDevices[i];
                const ownerId = newOwnerIds[i];
                
                const deviceRef = doc(db, 'devices', device.id);
                assignmentBatch.update(deviceRef, { ownerId: ownerId, status: 'assigned' });

                const newAssignmentRef = doc(assignmentsRef);
                let assignmentType: 'kwh-meter' | 'timer' | undefined = undefined;
                if (device.deviceType === 'kwh-meter') {
                    assignmentType = 'kwh-meter';
                } else if (device.deviceType === 'timer') {
                    assignmentType = 'timer';
                } else if (device.deviceType === 'kwh-meter-timer') {
                    assignmentType = Math.random() > 0.5 ? 'kwh-meter' : 'timer';
                }

                assignmentBatch.set(newAssignmentRef, {
                    ownerId,
                    deviceId: device.id,
                    activatedDate: new Date().toISOString().split('T')[0],
                    chargePerKwh: (assignmentType === 'kwh-meter') ? parseFloat((Math.random() * 5).toFixed(2)) : 0,
                    chargePerMinute: (assignmentType === 'timer') ? parseFloat((Math.random() * 2).toFixed(2)) : 0,
                    assignmentType: assignmentType,
                });
            }
            await assignmentBatch.commit();
        }
    } catch (error) {
        console.error("Database Error: Failed to Generate Sample Data.", error);
    }

    revalidatePath('/device-owners');
    revalidatePath('/devices');
}


export async function assignDeviceToOwner(ownerId: string, _prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = OwnerDeviceSchema.safeParse({
        deviceId: formData.get('deviceId'),
        ownerId: ownerId,
        activatedDate: formData.get('activatedDate'),
        chargePerKwh: formData.get('chargePerKwh'),
        chargePerMinute: formData.get('chargePerMinute'),
        assignmentType: formData.get('assignmentType'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to assign device. Please check the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    
    const { deviceId, activatedDate, chargePerKwh, chargePerMinute, assignmentType } = validatedFields.data;
    
    const newAssignmentData: any = {
        ownerId,
        deviceId,
        activatedDate,
        chargePerKwh,
        chargePerMinute,
    };

    if (assignmentType) {
        newAssignmentData.assignmentType = assignmentType;
    }

    try {
        await addDoc(collection(db, 'owners-devices'), newAssignmentData);
        const deviceRef = doc(db, 'devices', deviceId);
        await updateDoc(deviceRef, { ownerId, status: 'assigned' });
    } catch (error) {
        return { success: false, message: 'Database Error: Failed to Assign Device.' };
    }

    revalidatePath('/device-owners');
    revalidatePath(`/device-owners/${ownerId}`);
    revalidatePath('/devices');

    return { success: true, message: 'Device assigned successfully.', errors: {} };
}

const UpdateOwnerDeviceSchema = OwnerDeviceSchema.omit({ ownerId: true, deviceId: true, activatedDate: true });

export async function updateDeviceAssignment(assignmentId: string, ownerId: string, _prevState: FormState, formData: FormData): Promise<FormState> {
    
    const chargePerKwhValue = formData.get('chargePerKwh');
    const chargePerMinuteValue = formData.get('chargePerMinute');

    const validatedFields = UpdateOwnerDeviceSchema.safeParse({
        chargePerKwh: chargePerKwhValue,
        chargePerMinute: chargePerMinuteValue,
        assignmentType: formData.get('assignmentType'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to update assignment. Please check the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const dataToUpdate: Record<string, any> = {};
        const { chargePerKwh, chargePerMinute, assignmentType } = validatedFields.data;

        dataToUpdate.chargePerKwh = chargePerKwh;
        dataToUpdate.chargePerMinute = chargePerMinute;
        if (assignmentType) {
            dataToUpdate.assignmentType = assignmentType;
        }

        const assignmentRef = doc(db, 'owners-devices', assignmentId);
        await updateDoc(assignmentRef, dataToUpdate);

    } catch (error) {
        console.error('Database Error: Failed to update assignment.', error);
        return { success: false, message: `Database Error: Failed to update assignment.` };
    }

    revalidatePath(`/device-owners/${ownerId}`);
    return { success: true, message: 'Device assignment updated successfully.', errors: {} };
}

export async function unassignDeviceFromOwner(assignmentId: string, deviceId: string, ownerId: string) {
    try {
        const assignmentRef = doc(db, 'owners-devices', assignmentId);
        await deleteDoc(assignmentRef);
        
        const deviceRef = doc(db, 'devices', deviceId);
        await updateDoc(deviceRef, { ownerId: null, status: 'available' });

        revalidatePath(`/device-owners/${ownerId}`);
        revalidatePath('/device-owners');
        revalidatePath('/devices');
        return { message: 'Device unassigned successfully.', success: true };
    } catch (error) {
        return { message: 'An error occurred while un-assigning the device.', success: false };
    }
}

// Device User Actions
export async function createDeviceUser(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        photoUrl: formData.get('photoUrl'),
        name: formData.get('name'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        socialMediaUrl: formData.get('socialMediaUrl'),
    };
    
    const validatedFields = DeviceUserSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
          success: false,
          message: 'Failed to create device user. Please check the errors below.',
          errors: validatedFields.error.flatten().fieldErrors,
          fields: rawFormData,
        };
    }

    const { name, email, phoneNumber, socialMediaUrl } = validatedFields.data;
    
    try {
        const usersRef = collection(db, 'device-users');
        const qName = firestoreQuery(usersRef, where('name', '==', name));
        if (!(await getDocs(qName)).empty) {
            return { success: false, message: 'This name is already in use.', errors: { name: ['Name must be unique.'] }, fields: rawFormData };
        }
        const qEmail = firestoreQuery(usersRef, where('email', '==', email));
        if (!(await getDocs(qEmail)).empty) {
            return { success: false, message: 'This email is already in use.', errors: { email: ['Email must be unique.'] }, fields: rawFormData };
        }
        if (phoneNumber) {
            const qPhone = firestoreQuery(usersRef, where('phoneNumber', '==', phoneNumber));
            if (!(await getDocs(qPhone)).empty) {
                return { success: false, message: 'This phone number is already in use.', errors: { phoneNumber: ['Phone number must be unique.'] }, fields: rawFormData };
            }
        }
        const qSocial = firestoreQuery(usersRef, where('socialMediaUrl', '==', socialMediaUrl));
        if (!(await getDocs(qSocial)).empty) {
            return { success: false, message: 'This social media URL is already in use.', errors: { socialMediaUrl: ['Social media URL must be unique.'] }, fields: rawFormData };
        }
        
        await addDoc(usersRef, validatedFields.data);
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database Error: Failed to Create Device User.', fields: rawFormData };
    }

    revalidatePath('/device-users');
    redirect('/device-users');
}

export async function updateDeviceUser(id: string, prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        photoUrl: formData.get('photoUrl'),
        name: formData.get('name'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        socialMediaUrl: formData.get('socialMediaUrl'),
    };

    const page = formData.get('page') as string || '1';

    const validatedFields = DeviceUserSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to update device user. Please check the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
            fields: rawFormData
        };
    }

    const { name, email, phoneNumber, socialMediaUrl } = validatedFields.data;

    try {
        const usersRef = collection(db, 'device-users');

        const qName = firestoreQuery(usersRef, where('name', '==', name));
        const nameSnapshot = await getDocs(qName);
        if (!nameSnapshot.empty && nameSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This name is already in use by another user.', errors: { name: ['Name must be unique.'] }, fields: rawFormData };
        }

        const qEmail = firestoreQuery(usersRef, where('email', '==', email));
        const emailSnapshot = await getDocs(qEmail);
        if (!emailSnapshot.empty && emailSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This email is already in use by another user.', errors: { email: ['Email must be unique.'] }, fields: rawFormData };
        }

        if (phoneNumber) {
            const qPhone = firestoreQuery(usersRef, where('phoneNumber', '==', phoneNumber));
            const phoneSnapshot = await getDocs(qPhone);
            if (!phoneSnapshot.empty && phoneSnapshot.docs[0].id !== id) {
                return { success: false, message: 'This phone number is already in use by another user.', errors: { phoneNumber: ['Phone number must be unique.'] }, fields: rawFormData };
            }
        }
        
        const qSocial = firestoreQuery(usersRef, where('socialMediaUrl', '==', socialMediaUrl));
        const socialSnapshot = await getDocs(qSocial);
        if (!socialSnapshot.empty && socialSnapshot.docs[0].id !== id) {
            return { success: false, message: 'This social media URL is already in use by another user.', errors: { socialMediaUrl: ['Social media URL must be unique.'] }, fields: rawFormData };
        }

        const userRef = doc(db, 'device-users', id);
        await updateDoc(userRef, validatedFields.data);
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database Error: Failed to Update Device User.', fields: rawFormData };
    }

    revalidatePath('/device-users');
    revalidatePath(`/device-users/${id}`);
    redirect(`/device-users?page=${page}`);
}


export async function deleteDeviceUser(id: string) {
    try {
        const userRef = doc(db, 'device-users', id);
        await deleteDoc(userRef);
        revalidatePath('/device-users');
        return { message: 'Device user deleted successfully.', success: true };
    } catch (error) {
        return { message: 'An error occurred while deleting the device user.', success: false };
    }
}

export async function generateSampleDeviceUsers() {
    const firstNames = ['John', 'Jane', 'Peter', 'Mary', 'David', 'Susan', 'Michael', 'Linda', 'James', 'Patricia', 'Robert', 'Jennifer', 'William', 'Elizabeth', 'Richard', 'Jessica', 'Joseph', 'Sarah', 'Charles', 'Karen'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
    const generatedNames = new Set<string>();

    try {
        const batch = writeBatch(db);
        const usersRef = collection(db, 'device-users');
        for (let i = 0; i < 50; i++) {
            const newUserRef = doc(usersRef);
            
            let name: string;
            let firstName: string;
            let lastName: string;

            do {
                firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                name = `${firstName} ${lastName}`;
            } while (generatedNames.has(name));

            generatedNames.add(name);

            const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;

            batch.set(newUserRef, {
                name: name,
                email: email,
                phoneNumber: `+63917${(Math.floor(Math.random() * 9000000) + 1000000).toString()}`,
                socialMediaUrl: `https://example.com/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
                photoUrl: `https://picsum.photos/seed/${newUserRef.id}/200/200`,
            });
        }
        await batch.commit();
    } catch (error) {
        console.error("Database Error: Failed to Generate Sample Users.", error);
        return { message: 'Database Error: Failed to Generate Sample Users.' };
    }

    revalidatePath('/device-users');
}

// Device Model Actions
export async function createDeviceModel(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = DeviceModelSchema.safeParse({
        deviceModel: formData.get('deviceModel'),
        feature: formData.get('feature'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to create device model.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { deviceModel } = validatedFields.data;

    try {
        const deviceModelsRef = collection(db, 'device-models');
        const q = firestoreQuery(deviceModelsRef, where('deviceModel', '==', deviceModel));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return {
                success: false,
                message: 'A device model with this name already exists.',
                errors: { deviceModel: ['This device model name is already in use.'] },
            };
        }

        await addDoc(deviceModelsRef, validatedFields.data);
    } catch (error) {
        return { success: false, message: 'Database Error: Failed to Create Device Model.' };
    }

    revalidatePath('/device-models');
    redirect('/device-models');
}

export async function updateDeviceModel(id: string, prevState: FormState, formData: FormData): Promise<FormState> {
    const page = formData.get('page') as string || '1';

    const validatedFields = DeviceModelSchema.safeParse({
        deviceModel: formData.get('deviceModel'),
        feature: formData.get('feature'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Failed to update device model.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { deviceModel } = validatedFields.data;

    try {
        const deviceModelsRef = collection(db, 'device-models');
        const q = firestoreQuery(deviceModelsRef, where('deviceModel', '==', deviceModel));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty && querySnapshot.docs[0].id !== id) {
            return {
                success: false,
                message: 'A device model with this name already exists.',
                errors: { deviceModel: ['This device model name is already in use.'] },
            };
        }
        
        const deviceModelRef = doc(db, 'device-models', id);
        await updateDoc(deviceModelRef, validatedFields.data);
    } catch (error) {
        return { success: false, message: 'Database Error: Failed to Update Device Model.' };
    }

    revalidatePath('/device-models');
    redirect(`/device-models?page=${page}`);
}

export async function deleteDeviceModel(id: string) {
    try {
        const deviceModelRef = doc(db, `device-models/${id}`);
        await deleteDoc(deviceModelRef);
        revalidatePath('/device-models');
        return { message: 'Device model deleted successfully.', success: true };
    } catch (error) {
        return { message: 'An error occurred while deleting the device model.', success: false };
    }
}
    

    