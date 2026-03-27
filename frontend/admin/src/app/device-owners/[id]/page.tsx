
import { notFound } from 'next/navigation';
import { getDeviceOwnerById, getDevicesByOwnerId } from '@/lib/data';
import { DeviceOwnerDetailsClientPage } from '@/components/device-owner-details-client-page';

export default async function DeviceOwnerDetailsPage({ params }: { params: { id: string } }) {
  const ownerId = params.id;
  const owner = await getDeviceOwnerById(ownerId);
  
  if (!owner) {
    notFound();
  }
  
  const ownedDevices = await getDevicesByOwnerId(ownerId);

  return (
    <DeviceOwnerDetailsClientPage owner={owner} ownedDevices={ownedDevices} />
  );
}
