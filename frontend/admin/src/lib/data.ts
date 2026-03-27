
import { db } from './firebase';
import { collection, getDocs, doc, getDoc, query as firestoreQuery, where, orderBy, limit } from "firebase/firestore";
import type { Device, DeviceOwner, OwnedDevice, OwnedDeviceWithDetails, DeviceUser, DeviceModel } from './definitions';

const ITEMS_PER_PAGE = 5;

export const getDashboardSummary = async (): Promise<{ totalUsers: number; activeDevices: number; totalDevices: number; totalOwners: number; newlyAssignedDevices: number; recentlyManufactured: number; }> => {
    try {
        const usersSnapshot = await getDocs(collection(db, 'device-users'));
        const devicesSnapshot = await getDocs(collection(db, 'devices'));
        const ownersSnapshot = await getDocs(collection(db, 'device-owners'));

        const totalUsers = usersSnapshot.size;
        const totalOwners = ownersSnapshot.size;
        
        let activeDevices = 0;
        let totalDevices = 0;
        let newlyAssignedDevices = 0;
        let recentlyManufactured = 0;

        if (!devicesSnapshot.empty) {
            totalDevices = devicesSnapshot.size;
            const allDevices: Device[] = [];
            devicesSnapshot.forEach(doc => allDevices.push({id: doc.id, ...doc.data()} as Device));
            
            activeDevices = allDevices.filter(
                (device) => device.status === 'available' || device.status === 'running'
            ).length;
            
            newlyAssignedDevices = allDevices.filter(
                (device) => device.status === 'assigned'
            ).length;

            recentlyManufactured = allDevices.filter(
                (device) => device.status === 'manufactured'
            ).length;
        }

        return { totalUsers, activeDevices, totalDevices, totalOwners, newlyAssignedDevices, recentlyManufactured };
    } catch (error) {
        console.error("Error fetching dashboard summary:", error);
        return { totalUsers: 0, activeDevices: 0, totalDevices: 0, totalOwners: 0, newlyAssignedDevices: 0, recentlyManufactured: 0 };
    }
};

export const getDevices = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}): Promise<{ devices: Device[]; totalDevices: number }> => {
  try {
    const devicesCollection = collection(db, 'devices');
    const snapshot = await getDocs(devicesCollection);
    
    if (snapshot.empty) {
      return { devices: [], totalDevices: 0 };
    }

    let devicesArray: Device[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Device));

    if (query) {
      const lowercasedQuery = query.toLowerCase();
      devicesArray = devicesArray.filter(device =>
        device.serialNumber.toLowerCase().includes(lowercasedQuery) ||
        device.status.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    devicesArray.sort((a, b) => new Date(b.manufacturedDate).getTime() - new Date(a.manufacturedDate).getTime());

    const totalDevices = devicesArray.length;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedDevices = devicesArray.slice(offset, offset + ITEMS_PER_PAGE);

    return { devices: paginatedDevices, totalDevices };
  } catch (error) {
    console.error(error);
    return { devices: [], totalDevices: 0 };
  }
};

export const getAllDevices = async (): Promise<Device[]> => {
    try {
      const snapshot = await getDocs(collection(db, 'devices'));
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Device));
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export async function searchAvailableDevices(query: string): Promise<Device[]> {
    try {
        const assignableStatuses = ['available', 'manufactured', 'unassigned'];
        const q = firestoreQuery(collection(db, 'devices'), where('status', 'in', assignableStatuses));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return [];
        }

        let availableDevices: Device[] = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as Device))
            .filter(device => !device.ownerId);
      
        if (!query) {
            return availableDevices.slice(0, 10);
        }

        const filteredDevices = availableDevices.filter(device => 
            device.serialNumber.toLowerCase().includes(query.toLowerCase())
        );

        return filteredDevices.slice(0, 10);

    } catch (error) {
        console.error("Error searching available devices", error);
        return [];
    }
}

export const getDeviceById = async (id: string): Promise<Device | undefined> => {
  try {
    const docRef = doc(db, 'devices', id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id, ...snapshot.data() } as Device;
    }
  } catch(error) {
      console.error(error);
  }
};

export const getOfflineDevices = async ({
    query,
    currentPage,
    errorsOnly,
  }: {
    query: string;
    currentPage: number;
    errorsOnly?: boolean;
  }): Promise<{ devices: Device[]; totalDevices: number }> => {
    try {
        const statuses: ('offline' | 'error')[] = errorsOnly ? ['error'] : ['offline', 'error'];
        const q = firestoreQuery(collection(db, 'devices'), where('status', 'in', statuses));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
          return { devices: [], totalDevices: 0 };
        }

        let attentionDevices: Device[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Device));
        
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            attentionDevices = attentionDevices.filter(device =>
              device.serialNumber.toLowerCase().includes(lowercasedQuery) ||
              device.status.toLowerCase().includes(lowercasedQuery)
            );
        }

        attentionDevices.sort((a, b) => new Date(b.manufacturedDate).getTime() - new Date(a.manufacturedDate).getTime());

        const totalDevices = attentionDevices.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedDevices = attentionDevices.slice(offset, offset + ITEMS_PER_PAGE);
  
        return { devices: paginatedDevices, totalDevices };
    } catch (error) {
      console.error(error);
      return { devices: [], totalDevices: 0 };
    }
  };

export const getDeviceOwners = async ({
    query,
    currentPage,
    }: {
    query: string;
    currentPage: number;
    }): Promise<{ owners: DeviceOwner[]; totalOwners: number }> => {
    try {
        const ownersSnapshot = await getDocs(collection(db, 'device-owners'));
        const assignmentsSnapshot = await getDocs(collection(db, 'owners-devices'));

        if (ownersSnapshot.empty) {
            return { owners: [], totalOwners: 0 };
        }

        const assignmentsCount: Record<string, number> = {};
        if (!assignmentsSnapshot.empty) {
            assignmentsSnapshot.forEach(doc => {
                const ownerId = doc.data().ownerId;
                assignmentsCount[ownerId] = (assignmentsCount[ownerId] || 0) + 1;
            });
        }
        
        let ownersArray: DeviceOwner[] = ownersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            assignedDevicesCount: assignmentsCount[doc.id] || 0,
        } as DeviceOwner));

        if (query) {
            const lowercasedQuery = query.toLowerCase();
            ownersArray = ownersArray.filter(owner =>
                owner.name.toLowerCase().includes(lowercasedQuery) ||
                owner.email.toLowerCase().includes(lowercasedQuery) ||
                (owner.phoneNumber && owner.phoneNumber.includes(query))
            );
        }
        
        ownersArray.sort((a, b) => a.name.localeCompare(b.name));
        
        const totalOwners = ownersArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedOwners = ownersArray.slice(offset, offset + ITEMS_PER_PAGE);

        return { owners: paginatedOwners, totalOwners };
    } catch (error) {
        console.error(error);
        return { owners: [], totalOwners: 0 };
    }
}

export const getDeviceOwnerById = async (id: string): Promise<DeviceOwner | undefined> => {
    try {
        const docRef = doc(db, 'device-owners', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            const q = firestoreQuery(collection(db, 'owners-devices'), where('ownerId', '==', id));
            const assignmentsSnapshot = await getDocs(q);
            const assignedDevicesCount = assignmentsSnapshot.size;
            return { id, ...snapshot.data(), assignedDevicesCount } as DeviceOwner;
        }
    } catch(error) {
        console.error(error);
    }
}

export const getDevicesByOwnerId = async (ownerId: string): Promise<OwnedDeviceWithDetails[]> => {
    try {
        const q = firestoreQuery(collection(db, 'owners-devices'), where('ownerId', '==', ownerId));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return [];
        }
        
        const ownerDeviceRelations: OwnedDevice[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as OwnedDevice));

        const deviceDetailsPromises = ownerDeviceRelations.map(async (relation) => {
            const device = await getDeviceById(relation.deviceId);
            if (device) {
                return {
                    ...relation,
                    deviceSerialNumber: device.serialNumber,
                    deviceType: device.deviceType,
                    status: device.status,
                };
            }
            return null;
        });

        const resolvedDevices = await Promise.all(deviceDetailsPromises);
        return resolvedDevices.filter((device): device is OwnedDeviceWithDetails => device !== null);

    } catch (error) {
        console.error("Error fetching devices for owner:", error);
        return [];
    }
};

export const getDeviceUsers = async ({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }): Promise<{ users: DeviceUser[]; totalUsers: number }> => {
  try {
    const snapshot = await getDocs(collection(db, 'device-users'));
    if (snapshot.empty) {
      return { users: [], totalUsers: 0 };
    }
      
    let usersArray: DeviceUser[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DeviceUser));

    if (query) {
      const lowercasedQuery = query.toLowerCase();
      usersArray = usersArray.filter(user =>
        user.name.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    usersArray.sort((a, b) => a.name.localeCompare(b.name));
    
    const totalUsers = usersArray.length;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = usersArray.slice(offset, offset + ITEMS_PER_PAGE);

    return { users: paginatedUsers, totalUsers };
  } catch (error) {
    console.error(error);
    return { users: [], totalUsers: 0 };
  }
};

export const getDeviceUserById = async (id: string): Promise<DeviceUser | undefined> => {
  try {
    const docRef = doc(db, 'device-users', id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: id, ...snapshot.data() } as DeviceUser;
    }
  } catch(error) {
      console.error(error);
  }
};

export const getDeviceModels = async ({
    query,
    currentPage,
    }: {
    query: string;
    currentPage: number;
    }): Promise<{ deviceModels: DeviceModel[]; totalDeviceModels: number }> => {
    try {
        const snapshot = await getDocs(collection(db, 'device-models'));
        if (snapshot.empty) {
            return { deviceModels: [], totalDeviceModels: 0 };
        }
        
        let deviceModelsArray: DeviceModel[] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as DeviceModel));

        if (query) {
            const lowercasedQuery = query.toLowerCase();
            deviceModelsArray = deviceModelsArray.filter(dm =>
                dm.deviceModel.toLowerCase().includes(lowercasedQuery)
            );
        }
        
        deviceModelsArray.sort((a, b) => a.deviceModel.localeCompare(b.deviceModel));

        const totalDeviceModels = deviceModelsArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedDeviceModels = deviceModelsArray.slice(offset, offset + ITEMS_PER_PAGE);

        return { deviceModels: paginatedDeviceModels, totalDeviceModels };

    } catch (error) {
        console.error(error);
        return { deviceModels: [], totalDeviceModels: 0 };
    }
};

export const getAllDeviceModels = async (): Promise<DeviceModel[]> => {
    try {
      const snapshot = await getDocs(collection(db, 'device-models'));
      if (snapshot.empty) {
        return [];
      }
      const deviceModelsArray: DeviceModel[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as DeviceModel));
      deviceModelsArray.sort((a, b) => a.deviceModel.localeCompare(b.deviceModel));
      return deviceModelsArray;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export const getDeviceModelById = async (id: string): Promise<DeviceModel | undefined> => {
    try {
        const docRef = doc(db, 'device-models', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return { id, ...snapshot.data() } as DeviceModel;
        }
    } catch(error) {
        console.error(error);
    }
};
