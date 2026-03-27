
'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Plus, Edit, ArrowLeft, ArrowRight, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Device } from '@/lib/definitions';
import { DeleteDeviceDialog } from '@/components/delete-device-dialog';
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';
import { generateSampleDevices } from '@/lib/actions';
import { NavMenu } from '@/components/nav-menu';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { format } from 'date-fns';
import { DeleteAllDevicesDialog } from './delete-all-devices-dialog';

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

export function DevicesClientPage({
  initialDevices,
  totalDevices,
  searchParams,
}: {
  initialDevices: Device[];
  totalDevices: number;
  searchParams: { query?: string; page?: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [total, setTotal] = useState(totalDevices);

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(total / 5);

  useEffect(() => {
    setDevices(initialDevices);
    setTotal(totalDevices);
  }, [initialDevices, totalDevices]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleRowClick = (id: string) => {
    router.push(`/devices/${id}?page=${currentPage}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <h1 className="text-2xl font-bold text-primary font-headline">Devices</h1>
            
            <div className="flex items-center gap-2">
              <DeleteAllDevicesDialog />
              <form action={generateSampleDevices}>
                <Button variant="outline">
                  <Cog className="mr-2 h-4 w-4" /> Generate Sample Data
                </Button>
              </form>
              <Button asChild>
                <Link href="/devices/new">
                  <Plus className="mr-2 h-4 w-4" /> Add Device
                </Link>
              </Button>
              <NavMenu />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Devices</CardTitle>
                    <div className="w-full max-w-sm">
                        <Suspense fallback={<div>Loading search...</div>}>
                            <Search placeholder="Search by serial number or status..." />
                        </Suspense>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
            {devices.length > 0 ? (
                <>
                    <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Serial Number</TableHead>
                            <TableHead>Model No.</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Manufactured Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {devices.map((device: Device) => (
                            <TableRow key={device.id} onClick={() => handleRowClick(device.id)} className="cursor-pointer">
                            <TableCell className="font-medium">{device.serialNumber}</TableCell>
                            <TableCell>{device.modelNumber}</TableCell>
                            <TableCell className="capitalize">{deviceTypeLabels[device.deviceType]}</TableCell>
                            <TableCell>
                                <Badge
                                    variant={statusVariants[device.status]}
                                    className={cn('capitalize',
                                        device.status === 'running' && 'bg-green-500 text-white',
                                        device.status === 'offline' && 'bg-amber-100 text-amber-800 border-amber-200',
                                        device.status === 'assigned' && 'bg-sky-100 text-sky-800 border-sky-200',
                                        device.status === 'manufactured' && 'bg-gray-100 text-gray-800 border-gray-200',
                                        device.status === 'unassigned' && 'bg-gray-100 text-gray-800 border-gray-200'
                                    )}
                                >
                                {device.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{device.manufacturedDate ? format(new Date(device.manufacturedDate), 'yyyy-MM-dd') : 'N/A'}</TableCell>
                            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-end items-center gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/devices/${device.id}/edit?back=/devices&page=${currentPage}`}>
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                    </Link>
                                </Button>
                                <DeleteDeviceDialog deviceId={device.id} />
                                </div>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <Button asChild variant="outline" size="sm" disabled={currentPage <= 1}>
                                <Link href={createPageURL(currentPage - 1)} className={cn(currentPage <= 1 && "pointer-events-none")}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Previous
                                </Link>
                            </Button>

                            <span className="text-sm text-muted-foreground">
                                Page {currentPage} of {totalPages}
                            </span>
                        
                            <Button asChild variant="outline" size="sm" disabled={currentPage >= totalPages}>
                                <Link href={createPageURL(currentPage + 1)} className={cn(currentPage >= totalPages && "pointer-events-none")}>
                                    Next
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <form
                                action={(formData) => {
                                    const page = formData.get('page') as string;
                                    router.push(createPageURL(page));
                                }}
                                className="flex items-center gap-2"
                            >
                                {query && <input type="hidden" name="query" value={query} />}
                                <Input
                                    type="number"
                                    name="page"
                                    defaultValue={currentPage}
                                    className="h-9 w-16"
                                    min="1"
                                    max={totalPages}
                                />
                                <Button type="submit" size="sm" variant="outline">Go</Button>
                            </form>
                        </div>
                    )}
                </>
                ) : (
                <div className="flex flex-col items-center justify-center h-full rounded-lg border-2 border-dashed border-muted-foreground/30 py-24 text-center">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground font-headline">No Devices Found</h2>
                    <p className="mt-2 text-muted-foreground">
                    {query ? "Try a different search term." : "Get started by adding your first device or generating sample data."}
                    </p>
                    {!query && (
                        <Button asChild className="mt-6">
                            <Link href="/devices/new">
                                <Plus className="mr-2 h-4 w-4" /> Add Device
                            </Link>
                        </Button>
                    )}
                </div>
                )}
            </CardContent>
        </Card>
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Dormamu. All rights reserved.
      </footer>
    </div>
  );
}
