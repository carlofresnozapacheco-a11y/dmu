
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
import type { DeviceOwner } from '@/lib/definitions';
import { DeleteDeviceOwnerDialog } from '@/components/delete-device-owner-dialog';
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';
import { NavMenu } from '@/components/nav-menu';
import { generateSampleDeviceOwners } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDeviceOwners } from '@/lib/data';
import { cn } from '@/lib/utils';
import { DeleteAllOwnersDialog } from './delete-all-owners-dialog';

export function DeviceOwnerClientPage({
  initialOwners,
  totalOwners,
  searchParams,
}: {
  initialOwners: DeviceOwner[];
  totalOwners: number;
  searchParams: { query?: string; page?: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();
  const [owners, setOwners] = useState<DeviceOwner[]>(initialOwners);
  const [total, setTotal] = useState(totalOwners);

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(total / 5);

  useEffect(() => {
    setOwners(initialOwners);
    setTotal(totalOwners);
  }, [initialOwners, totalOwners]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleRowClick = (id: string) => {
    router.push(`/device-owners/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <h1 className="text-2xl font-bold text-primary font-headline">Device Owners</h1>
            <div className="flex items-center gap-2">
              <DeleteAllOwnersDialog />
              <form action={generateSampleDeviceOwners}>
                <Button variant="outline">
                  <Cog className="mr-2 h-4 w-4" /> Generate Sample Data
                </Button>
              </form>
              <Button asChild>
                <Link href="/device-owners/new">
                  <Plus className="mr-2 h-4 w-4" /> Add New Owner
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
                    <CardTitle>Owners</CardTitle>
                    <div className="w-full max-w-sm">
                        <Suspense fallback={<div>Loading search...</div>}>
                            <Search placeholder="Search by name, email, or phone..." />
                        </Suspense>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone Number</TableHead>
                        <TableHead>Devices</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {owners.length > 0 ? (
                        owners.map((owner: DeviceOwner) => (
                            <TableRow key={owner.id} onClick={() => handleRowClick(owner.id)} className="cursor-pointer">
                            <TableCell className="font-medium">
                                {owner.name}
                            </TableCell>
                            <TableCell>{owner.email}</TableCell>
                            <TableCell>{owner.phoneNumber}</TableCell>
                            <TableCell>{owner.assignedDevicesCount}</TableCell>
                            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-end items-center gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/device-owners/${owner.id}/edit?page=${currentPage}`}>
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                    </Link>
                                </Button>
                                <DeleteDeviceOwnerDialog ownerId={owner.id} />
                                </div>
                            </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
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
