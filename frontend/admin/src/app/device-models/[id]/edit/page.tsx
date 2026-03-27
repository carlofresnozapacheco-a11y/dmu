
import { notFound } from 'next/navigation';
import { getDeviceModelById } from '@/lib/data';
import { updateDeviceModel } from '@/lib/actions';
import { DeviceModelForm } from '@/components/device-model-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EditDeviceModelPage({ 
  params,
  searchParams,
}: { 
  params: { id: string };
  searchParams?: { page?: string };
}) {
  const id = params.id;
  const page = searchParams?.page || '1';
  const model = await getDeviceModelById(id);

  if (!model) {
    notFound();
  }

  const updateDeviceModelWithId = updateDeviceModel.bind(null, id);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Edit Device Model" backHref={`/device-models?page=${page}`} />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Update Model Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceModelForm model={model} action={updateDeviceModelWithId} currentPage={page} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
