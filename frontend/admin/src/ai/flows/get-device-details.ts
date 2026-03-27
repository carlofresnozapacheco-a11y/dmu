
'use server';
/**
 * @fileOverview A flow for retrieving detailed device information from Firestore.
 *
 * - getDeviceDetailsBySerialNumber - A function that fetches properties for a given device serial number.
 * - DeviceDetailsInput - The input type for the getDeviceDetailsBySerialNumber function.
 * - DeviceDetailsOutput - The return type for the getDeviceDetailsBySerialNumber function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Device, OwnedDevice } from '@/lib/definitions';

export const DeviceDetailsInputSchema = z.object({
  serialNumber: z.string().describe('The serial number of the device to look up.'),
});
export type DeviceDetailsInput = z.infer<typeof DeviceDetailsInputSchema>;

export const DeviceDetailsOutputSchema = z.object({
    found: z.boolean().describe("Whether the device was found."),
    device: z.object({
        id: z.string(),
        serialNumber: z.string(),
        deviceType: z.enum(['kwh-meter', 'timer', 'kwh-meter-timer']),
        status: z.enum(['online', 'offline', 'maintenance', 'deactivated', 'running', 'error', 'assigned', 'manufactured', 'unassigned']),
        manufacturedDate: z.string(),
        lastMaintenance: z.string(),
        ownerId: z.string().optional(),
        deactivatedReason: z.string().optional(),
        maintenanceReason: z.string().optional(),
    }).optional().describe("Properties from the 'devices' collection."),
    ownerDevice: z.object({
        id: z.string(),
        ownerId: z.string(),
        deviceId: z.string(),
        activatedDate: z.string(),
        chargePerKwh: z.number(),
        chargePerMinute: z.number(),
    }).optional().describe("Properties from the 'owners-devices' collection."),
});
export type DeviceDetailsOutput = z.infer<typeof DeviceDetailsOutputSchema>;


export async function getDeviceDetailsBySerialNumber(input: DeviceDetailsInput): Promise<DeviceDetailsOutput> {
  return getDeviceDetailsFlow(input);
}


const getDeviceDetailsFlow = ai.defineFlow(
  {
    name: 'getDeviceDetailsFlow',
    inputSchema: DeviceDetailsInputSchema,
    outputSchema: DeviceDetailsOutputSchema,
  },
  async (input) => {
    const { serialNumber } = input;

    // 1. Find device by serial number
    const devicesRef = collection(db, 'devices');
    const deviceQuery = query(devicesRef, where('serialNumber', '==', serialNumber), limit(1));
    const deviceSnapshot = await getDocs(deviceQuery);

    if (deviceSnapshot.empty) {
        return { found: false };
    }

    const deviceDoc = deviceSnapshot.docs[0];
    const device: Device = { id: deviceDoc.id, ...deviceDoc.data() } as Device;

    // 2. Find owner-device info by deviceId
    const ownersDevicesRef = collection(db, 'owners-devices');
    const ownerDeviceQuery = query(ownersDevicesRef, where('deviceId', '==', device.id), limit(1));
    const ownerDeviceSnapshot = await getDocs(ownerDeviceQuery);
    
    let ownerDevice: OwnedDevice | undefined = undefined;
    if (!ownerDeviceSnapshot.empty) {
        const ownerDeviceDoc = ownerDeviceSnapshot.docs[0];
        ownerDevice = { id: ownerDeviceDoc.id, ...ownerDeviceDoc.data() } as OwnedDevice;
    }

    return {
        found: true,
        device: device,
        ownerDevice: ownerDevice,
    };
  }
);
