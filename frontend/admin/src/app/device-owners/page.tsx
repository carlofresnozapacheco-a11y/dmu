
import { Suspense } from 'react';
import { DeviceOwnerClientPage } from '@/components/device-owner-client-page';
import { getDeviceOwners } from '@/lib/data';

export default async function DeviceOwnerPage({ searchParams }: { searchParams?: { query?: string, page?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { owners, totalOwners } = await getDeviceOwners({ query, currentPage });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceOwnerClientPage
        initialOwners={owners}
        totalOwners={totalOwners}
        searchParams={{ query, page: currentPage.toString() }}
      />
    </Suspense>
  );
}
