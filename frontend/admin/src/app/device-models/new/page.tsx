
import { createDeviceModel } from '@/lib/actions';
import { DeviceModelForm } from '@/components/device-model-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewDeviceModelPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Add New Device Model" backHref="/device-models" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Model Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceModelForm action={createDeviceModel} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
