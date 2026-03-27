
import { notFound } from 'next/navigation';
import { getDeviceOwnerById } from '@/lib/data';
import { updateDeviceOwner } from '@/lib/actions';
import { DeviceOwnerForm } from '@/components/device-owner-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EditDeviceOwnerPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const owner = await getDeviceOwnerById(id);

  if (!owner) {
    notFound();
  }

  const updateDeviceOwnerWithId = updateDeviceOwner.bind(null, id);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Edit Device Owner" backHref="/device-owner" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Update Owner Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceOwnerForm owner={owner} action={updateDeviceOwnerWithId} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
