
import { Suspense } from 'react';
import { DevicesClientPage } from '@/components/devices-client-page';

export default async function DashboardPage({ searchParams }: { searchParams?: { query?: string, page?: string }}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DevicesClientPage
        searchParams={{ query, page: currentPage.toString() }}
      />
    </Suspense>
  );
}
