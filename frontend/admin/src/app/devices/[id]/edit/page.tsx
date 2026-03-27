
import { notFound } from 'next/navigation';
import { getDeviceById, getAllDeviceModels } from '@/lib/data';
import { updateDevice } from '@/lib/actions';
import { DeviceForm } from '@/components/device-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EditDevicePage({ 
  params,
  searchParams,
 }: { 
  params: { id: string };
  searchParams?: { back?: string; page?: string };
}) {
  const id = params.id;
  const device = await getDeviceById(id);
  const deviceModels = await getAllDeviceModels();
  
  const back = searchParams?.back || `/devices/${id}`;
  const page = searchParams?.page || '1';
  
  const backHref = back === '/devices' ? `${back}?page=${page}` : `${back}&page=${page}`;

  if (!device) {
    notFound();
  }

  const updateDeviceWithId = updateDevice.bind(null, id);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Edit Device" backHref={backHref} />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Update Device Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceForm 
                      device={device} 
                      action={updateDeviceWithId} 
                      backHref={backHref} 
                      currentPage={page}
                      deviceModels={deviceModels}
                    />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
