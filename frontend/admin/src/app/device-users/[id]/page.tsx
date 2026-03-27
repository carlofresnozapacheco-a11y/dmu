
import { notFound } from 'next/navigation';
import { getDeviceUserById } from '@/lib/data';
import { DeviceUserDetailsClient } from '@/components/device-user-details-client';


export default async function DeviceUserDetailsPage({ 
  params,
  searchParams,
}: { 
  params: { id: string },
  searchParams?: { page?: string },
}) {
  const userId = params.id;
  const page = searchParams?.page || '1';
  const user = await getDeviceUserById(userId);
  
  if (!user) {
    notFound();
  }

  return <DeviceUserDetailsClient user={user} currentPage={page} />;
}
