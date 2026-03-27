
import { createDeviceUser } from '@/lib/actions';
import { DeviceUserForm } from '@/components/device-user-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewDeviceUserPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Add New Device User" backHref="/device-users" />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>User Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceUserForm action={createDeviceUser} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
