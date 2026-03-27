
'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight, Users, HardDrive, Database, UserSquare, UserCheck, Wrench } from 'lucide-react';
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
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';
import { NavMenu } from '@/components/nav-menu';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { format } from 'date-fns';

const statusVariants = {
    available: 'default',
    offline: 'secondary',
    maintenance: 'secondary',
    deactivated: 'outline',
    running: 'default',
    error: 'destructive',
    assigned: 'secondary',
} as const;

export function OfflineDevicesClientPage({
  initialDevices,
  totalDevices,
  summary,
  searchParams,
}: {
  initialDevices: Device[];
  totalDevices: number;
  summary: { totalUsers: number; activeDevices: number; totalDevices: number; totalOwners: number; newlyAssignedDevices: number; recentlyManufactured: number; };
  searchParams: { query?: string; page?: string; errorsOnly?: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const [offlineDevices, setOfflineDevices] = useState<Device[]>(initialDevices);
  const [total, setTotal] = useState(totalDevices);
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const errorsOnly = searchParams?.errorsOnly === 'true';
  const totalPages = Math.ceil(total / 5);

  useEffect(() => {
    setOfflineDevices(initialDevices);
    setTotal(totalDevices);
  }, [initialDevices, totalDevices]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleRowClick = (id: string) => {
    router.push(`/devices/${id}`);
  };

  const handleErrorsOnlyChange = (checked: boolean) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', '1');
    if (checked) {
        params.set('errorsOnly', 'true');
    } else {
        params.delete('errorsOnly');
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold text-primary font-headline">
              Home
            </h1>
            <NavMenu />
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
        <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">Summary</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.totalUsers}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Owners</CardTitle>
                        <UserSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.totalOwners}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.totalDevices}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.activeDevices}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recently Assigned to Owner</CardTitle>
                        <UserCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.newlyAssignedDevices}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recently Manufactured</CardTitle>
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.recentlyManufactured}</div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="mt-12">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Offline & Error Devices</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="errors-only" checked={errorsOnly} onCheckedChange={handleErrorsOnlyChange} />
                    <Label htmlFor="errors-only">Errors only</Label>
                  </div>
                  <div className="w-full max-w-sm">
                    <Suspense fallback={<div>Loading search...</div>}>
                      <Search placeholder="Search by serial number or status..." />
                    </Suspense>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {offlineDevices.length > 0 ? (
                <>
                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Serial Number</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Manufactured Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {offlineDevices.map((device) => (
                          <TableRow
                            key={device.id}
                            onClick={() => handleRowClick(device.id)}
                            className="cursor-pointer"
                          >
                            <TableCell className="font-medium">
                              {device.serialNumber}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={statusVariants[device.status as keyof typeof statusVariants]}
                                className={cn("capitalize",
                                    device.status === 'offline' && 'bg-amber-100 text-amber-800 border-amber-200'
                                )}
                              >
                                {device.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {format(new Date(device.manufacturedDate), 'yyyy-MM-dd')}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-6">
                      <Button asChild variant="outline" size="sm" disabled={currentPage <= 1}>
                        <Link href={createPageURL(currentPage - 1)} className={cn(currentPage <= 1 && 'pointer-events-none')}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Link>
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button asChild variant="outline" size="sm" disabled={currentPage >= totalPages}>
                        <Link href={createPageURL(currentPage + 1)} className={cn(currentPage >= totalPages && 'pointer-events-none')}>
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
                        {query && (
                          <input type="hidden" name="query" value={query} />
                        )}
                        <Input
                          type="number"
                          name="page"
                          defaultValue={currentPage}
                          className="h-9 w-16"
                          min="1"
                          max={totalPages}
                        />
                        <Button type="submit" size="sm" variant="outline">
                          Go
                        </Button>
                      </form>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 py-12 text-center">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {query ? 'No Devices Found' : 'All Devices Online'}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {query
                      ? 'Try a different search term.'
                      : 'There are currently no devices that require attention.'}
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/devices">View All Devices</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Dormamu. All rights reserved.
      </footer>
    </div>
  );
}
