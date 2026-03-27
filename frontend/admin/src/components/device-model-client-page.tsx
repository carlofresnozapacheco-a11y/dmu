
'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Plus, Edit, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import type { DeviceModel } from '@/lib/definitions';
import { DeleteDeviceModelDialog } from '@/components/delete-device-model-dialog';
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';
import { NavMenu } from '@/components/nav-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const featureLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};

export function DeviceModelClientPage({
  initialDeviceModels,
  totalDeviceModels,
  searchParams,
}: {
  initialDeviceModels: DeviceModel[];
  totalDeviceModels: number;
  searchParams: { query?: string; page?: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();
  const [deviceModels, setDeviceModels] = useState<DeviceModel[]>(initialDeviceModels);
  const [total, setTotal] = useState(totalDeviceModels);

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(total / 5);

  useEffect(() => {
    setDeviceModels(initialDeviceModels);
    setTotal(totalDeviceModels);
  }, [initialDeviceModels, totalDeviceModels]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <h1 className="text-2xl font-bold text-primary font-headline">Device Models</h1>
            <div className="flex items-center gap-2">
              <Button asChild>
                <Link href="/device-models/new">
                  <Plus className="mr-2 h-4 w-4" /> Add Model
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
                    <CardTitle>Models</CardTitle>
                    <div className="w-full max-w-sm">
                        <Suspense fallback={<div>Loading search...</div>}>
                            <Search placeholder="Search by model..." />
                        </Suspense>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Device Model</TableHead>
                        <TableHead>Feature</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {deviceModels.length > 0 ? (
                        deviceModels.map((model: DeviceModel) => (
                            <TableRow key={model.id}>
                            <TableCell className="font-medium">
                                {model.deviceModel}
                            </TableCell>
                            <TableCell>
                                {featureLabels[model.feature]}
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end items-center gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/device-models/${model.id}/edit?page=${currentPage}`}>
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                    </Link>
                                </Button>
                                <DeleteDeviceModelDialog modelId={model.id} />
                                </div>
                            </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="h-24 text-center">
                                No results found.
                            </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <Button variant="outline" size="sm" disabled={currentPage <= 1} asChild>
                            <Link href={createPageURL(currentPage - 1)} className={cn(currentPage <= 1 && "pointer-events-none")}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                            </Link>
                        </Button>
                        <span className="text-sm text-muted-foreground">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button variant="outline" size="sm" disabled={currentPage >= totalPages} asChild>
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
            </CardContent>
          </Card>
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Dormamu. All rights reserved.
      </footer>
    </div>
  );
}
