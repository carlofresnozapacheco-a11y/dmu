
import { notFound } from 'next/navigation';
import { getDeviceUserById } from '@/lib/data';
import { updateDeviceUser } from '@/lib/actions';
import { DeviceUserForm } from '@/components/device-user-form';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function EditDeviceUserPage({ 
  params,
  searchParams,
}: { 
  params: { id: string };
  searchParams?: { page?: string };
}) {
  const id = params.id;
  const page = searchParams?.page || '1';
  const user = await getDeviceUserById(id);

  if (!user) {
    notFound();
  }

  const updateDeviceUserWithId = updateDeviceUser.bind(null, id);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title="Edit Device User" backHref={`/device-users?page=${page}`} />
        <main className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Update User Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <DeviceUserForm user={user} action={updateDeviceUserWithId} currentPage={page} />
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
