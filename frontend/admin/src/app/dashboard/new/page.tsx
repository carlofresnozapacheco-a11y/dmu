
import { createDevice } from '@/lib/actions';
import { DeviceForm } from '@/components/device-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewDevicePage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Add New Device" backHref="/dashboard" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Device Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceForm action={createDevice} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
