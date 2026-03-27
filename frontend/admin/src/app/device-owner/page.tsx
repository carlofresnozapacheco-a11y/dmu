
import { Suspense } from 'react';
import { DeviceOwnerClientPage } from '@/components/device-owner-client-page';

export default async function DeviceOwnerPage({ searchParams }: { searchParams?: { query?: string, page?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceOwnerClientPage
        searchParams={{ query, page: currentPage.toString() }}
      />
    </Suspense>
  );
}
