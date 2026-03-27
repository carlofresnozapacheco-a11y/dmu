
'use client';

import type { DeviceOwner, OwnedDeviceWithDetails } from '@/lib/definitions';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { OwnedDevices } from '@/components/owned-devices';

export function DeviceOwnerDetailsClientPage({ owner, ownedDevices }: { owner: DeviceOwner, ownedDevices: OwnedDeviceWithDetails[] }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title={owner.name} backHref="/device-owners" />
        <main className="mt-8 grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Owner Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><span className="font-semibold">Email:</span> {owner.email}</p>
                    <p><span className="font-semibold">Phone Number:</span> {owner.phoneNumber}</p>
                    <p><span className="font-semibold">Address:</span> {owner.address}</p>
                    <p><span className="font-semibold">Social Media:</span> <a href={owner.socialMediaUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{owner.socialMediaUrl}</a></p>
                </CardContent>
            </Card>

            <OwnedDevices devices={ownedDevices} ownerId={owner.id} />

        </main>
      </div>
    </div>
  );
}
