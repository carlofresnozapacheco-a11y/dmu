
import { Suspense } from 'react';
import { OfflineDevicesClientPage } from '@/components/offline-devices-client-page';
import { getOfflineDevices, getDashboardSummary } from '@/lib/data';


export default async function HomePage({ searchParams }: { searchParams?: { query?: string, page?: string, errorsOnly?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const errorsOnly = searchParams?.errorsOnly === 'true';
  
  const { devices, totalDevices } = await getOfflineDevices({ query, currentPage, errorsOnly });
  const summary = await getDashboardSummary();
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <OfflineDevicesClientPage
            initialDevices={devices}
            totalDevices={totalDevices}
            summary={summary}
            searchParams={{ query, page: currentPage.toString(), errorsOnly: errorsOnly.toString() }}
        />
    </Suspense>
  );
}

