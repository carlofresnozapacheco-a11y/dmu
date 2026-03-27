
import { Suspense } from 'react';
import { DeviceModelClientPage } from '@/components/device-model-client-page';
import { getDeviceModels } from '@/lib/data';

export default async function DeviceModelsPage({ searchParams }: { searchParams?: { query?: string, page?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { deviceModels, totalDeviceModels } = await getDeviceModels({ query, currentPage });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceModelClientPage
        initialDeviceModels={deviceModels}
        totalDeviceModels={totalDeviceModels}
        searchParams={{ query, page: currentPage.toString() }}
      />
    </Suspense>
  );
}
