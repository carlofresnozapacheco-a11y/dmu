
import { notFound } from 'next/navigation';
import { getDeviceById } from '@/lib/data';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getDeviceOwnerById } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import Image from 'next/image';
import QRCode from 'qrcode';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const statusVariants = {
    available: 'default',
    offline: 'secondary',
    maintenance: 'secondary',
    deactivated: 'outline',
    running: 'default',
    error: 'destructive',
    assigned: 'secondary',
    manufactured: 'secondary',
    unassigned: 'secondary',
} as const;

const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
}

async function generateQRCode(text: string) {
    try {
        const url = await QRCode.toDataURL(text);
        return url;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default async function DeviceDetailsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { page?: string };
}) {
  const deviceId = params.id;
  const page = searchParams?.page || '1';
  const device = await getDeviceById(deviceId);
  
  if (!device) {
    notFound();
  }
  
  const owner = device.ownerId ? await getDeviceOwnerById(device.ownerId) : null;
  const qrCodeUrl = await generateQRCode(device.serialNumber);

  const formattedManufacturedDate = format(new Date(device.manufacturedDate), 'yyyy-MM-dd');
  const formattedLastMaintenanceDate = format(new Date(device.lastMaintenance), 'yyyy-MM-dd');

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title={device.serialNumber} backHref={`/devices?page=${page}`} />
        <main className="mt-8 grid gap-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Device Details</CardTitle>
                    <Button asChild variant="outline" size="sm">
                        <Link href={`/devices/${deviceId}/edit?back=/devices/${deviceId}&page=${page}`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><span className="font-semibold">Serial Number:</span> {device.serialNumber}</div>
                            <div><span className="font-semibold">Model No.:</span> {device.modelNumber}</div>
                            <div><span className="font-semibold">Type:</span> {deviceTypeLabels[device.deviceType]}</div>
                            <div>
                                <span className="font-semibold">Status:</span>
                                <Badge
                                    variant={statusVariants[device.status as keyof typeof statusVariants]}
                                    className={cn("capitalize",
                                        device.status === 'running' && 'bg-green-500 text-white',
                                        device.status === 'offline' && 'bg-amber-100 text-amber-800 border-amber-200',
                                        device.status === 'assigned' && 'bg-sky-100 text-sky-800 border-sky-200',
                                        device.status === 'manufactured' && 'bg-gray-100 text-gray-800 border-gray-200',
                                        device.status === 'unassigned' && 'bg-gray-100 text-gray-800 border-gray-200'
                                    )}
                                >
                                    {device.status}
                                </Badge>
                            </div>
                            <div><span className="font-semibold">Manufactured Date:</span> {formattedManufacturedDate}</div>
                            <div><span className="font-semibold">Last Maintenance:</span> {formattedLastMaintenanceDate}</div>
                        </div>
                        {device.status === 'maintenance' && device.maintenanceReason && (
                            <div><span className="font-semibold">Maintenance Reason:</span> {device.maintenanceReason}</div>
                        )}
                        {device.status === 'deactivated' && device.deactivatedReason && (
                            <div><span className="font-semibold">Deactivation Reason:</span> {device.deactivatedReason}</div>
                        )}
                        <div>
                            <span className="font-semibold">Owner:</span> 
                            {owner ? (
                                <Link href={`/device-owners/${owner.id}`} className="text-blue-600 hover:underline ml-1">{owner.name}</Link>
                            ) : ' Unassigned'}
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                        {qrCodeUrl && (
                            <>
                                <Image
                                    src={qrCodeUrl}
                                    alt={`QR code for ${device.serialNumber}`}
                                    width={150}
                                    height={150}
                                    className="rounded-lg"
                                />
                                <p className="mt-2 text-sm text-muted-foreground">Scan for serial number</p>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
