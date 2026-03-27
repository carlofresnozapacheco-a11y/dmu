
import { createDeviceOwner } from '@/lib/actions';
import { DeviceOwnerForm } from '@/components/device-owner-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewDeviceOwnerPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Add New Device Owner" backHref="/device-owner" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Owner Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceOwnerForm action={createDeviceOwner} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
