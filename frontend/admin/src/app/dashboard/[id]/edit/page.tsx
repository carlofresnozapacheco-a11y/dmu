
import { notFound } from 'next/navigation';
import { getDeviceById } from '@/lib/data';
import { updateDevice } from '@/lib/actions';
import { DeviceForm } from '@/components/device-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EditDevicePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const device = await getDeviceById(id);

  if (!device) {
    notFound();
  }

  const updateDeviceWithId = updateDevice.bind(null, id);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Edit Device" backHref="/dashboard" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Update Device Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceForm device={device} action={updateDeviceWithId} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
