
import { Suspense } from 'react';
import { getDeviceUsers } from '@/lib/data';
import { DeviceUserClientPage } from '@/components/device-user-client-page';

export default async function DeviceUsersPage({ searchParams }: { searchParams?: { query?: string, page?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { users, totalUsers } = await getDeviceUsers({ query, currentPage });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceUserClientPage
        initialUsers={users}
        totalUsers={totalUsers}
        searchParams={{ query, page: currentPage.toString() }}
      />
    </Suspense>
  );
}
