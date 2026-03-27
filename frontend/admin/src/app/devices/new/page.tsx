
import { createDevice } from '@/lib/actions';
import { DeviceForm } from '@/components/device-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllDeviceModels } from '@/lib/data';

export default async function NewDevicePage() {
  const deviceModels = await getAllDeviceModels();

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Add New Device" backHref="/devices" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Device Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceForm action={createDevice} deviceModels={deviceModels} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
