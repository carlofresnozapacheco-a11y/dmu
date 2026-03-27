
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
import type { DeviceUser } from '@/lib/definitions';
import { DeleteDeviceUserDialog } from '@/components/delete-device-user-dialog';
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';
import { NavMenu } from '@/components/nav-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { generateSampleDeviceUsers } from '@/lib/actions';
import { cn } from '@/lib/utils';

export function DeviceUserClientPage({
  initialUsers,
  totalUsers,
  searchParams,
}: {
  initialUsers: DeviceUser[];
  totalUsers: number;
  searchParams: { query?: string; page?: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();
  const [users, setUsers] = useState<DeviceUser[]>(initialUsers);
  const [total, setTotal] = useState(totalUsers);

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(total / 5);

  useEffect(() => {
    setUsers(initialUsers);
    setTotal(totalUsers);
  }, [initialUsers, totalUsers]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(currentSearchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleRowClick = (id: string) => {
    router.push(`/device-users/${id}?page=${currentPage}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <h1 className="text-2xl font-bold text-primary font-headline">Device Users</h1>
            <div className="flex items-center gap-2">
              <form action={generateSampleDeviceUsers}>
                  <Button variant="outline">
                      <Cog className="mr-2 h-4 w-4" /> Generate Sample Data
                  </Button>
              </form>
              <Button asChild>
                <Link href="/device-users/new">
                  <Plus className="mr-2 h-4 w-4" /> Add User
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
                    <CardTitle>Users</CardTitle>
                    <div className="w-full max-w-sm">
                        <Suspense fallback={<div>Loading search...</div>}>
                            <Search placeholder="Search by name or email..." />
                        </Suspense>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {users.length > 0 ? (
                        users.map((user: DeviceUser) => (
                            <TableRow key={user.id} onClick={() => handleRowClick(user.id)} className="cursor-pointer">
                             <TableCell>
                                <Avatar>
                                    <AvatarImage src={user.photoUrl} alt={user.name} />
                                    <AvatarFallback><User /></AvatarFallback>
                                </Avatar>
                             </TableCell>
                            <TableCell className="font-medium">
                                {user.name}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-end items-center gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/device-users/${user.id}/edit?page=${currentPage}`}>
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                    </Link>
                                </Button>
                                <DeleteDeviceUserDialog userId={user.id} />
                                </div>
                            </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
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
