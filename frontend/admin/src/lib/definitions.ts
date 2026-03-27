
export type Device = {
  id: string;
  serialNumber: string;
  modelNumber: string;
  deviceType: 'kwh-meter' | 'timer' | 'kwh-meter-timer';
  status: 'available' | 'offline' | 'maintenance' | 'deactivated' | 'running' | 'error' | 'assigned' | 'manufactured' | 'unassigned';
  manufacturedDate: string;
  lastMaintenance: string;
  ownerId?: string;
  deactivatedReason?: string;
  maintenanceReason?: string;
};

export type DeviceModel = {
  id: string;
  deviceModel: string;
  feature: 'kwh-meter' | 'timer' | 'kwh-meter-timer';
};

export type DeviceOwner = {
  id: string;
  name: string;
  address: string;
  email: string;
  socialMediaUrl: string;
  phoneNumber?: string;
  assignedDevicesCount: number;
};

export type OwnedDevice = {
    id: string;
    ownerId: string;
    deviceId: string;
    activatedDate: string;
    chargePerKwh: number;
    chargePerMinute: number;
    assignmentType?: 'kwh-meter' | 'timer';
};

export type OwnedDeviceWithDetails = OwnedDevice & {
    deviceSerialNumber: string;
    deviceType: Device['deviceType'];
    status: Device['status'];
}

export type DeviceUser = {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  socialMediaUrl: string;
  photoUrl?: string;
};
