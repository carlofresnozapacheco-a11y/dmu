
'use client';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { DeviceUser } from '@/lib/definitions';

export function DeviceUserDetailsClient({ user, currentPage = '1' }: { user: DeviceUser, currentPage?: string }) {
  const userId = user.id;

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <PageHeader title={user.name} backHref={`/device-users?page=${currentPage}`} />
        <main className="mt-8 grid gap-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>User Details</CardTitle>
                    <Button asChild variant="outline" size="sm">
                        <Link href={`/device-users/${userId}/edit?page=${currentPage}`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                        <p><span className="font-semibold">Name:</span> {user.name}</p>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Phone Number:</span> {user.phoneNumber}</p>
                        <p><span className="font-semibold">Social Media:</span> {user.socialMediaUrl ? <a href={user.socialMediaUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.socialMediaUrl}</a> : 'N/A'}</p>
                        <p><span className="font-semibold">Photo URL:</span> {user.photoUrl ? <a href={user.photoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.photoUrl}</a> : 'N/A'}</p>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <Dialog>
                            <DialogTrigger asChild disabled={!user.photoUrl}>
                                <Avatar className="h-32 w-32 cursor-pointer">
                                    <AvatarImage src={user.photoUrl} alt={user.name} />
                                    <AvatarFallback>
                                        <User className="h-16 w-16" />
                                    </AvatarFallback>
                                </Avatar>
                            </DialogTrigger>
                             <DialogContent className="max-w-xl">
                                <DialogHeader>
                                    <DialogTitle>{user.name || 'User Photo'}</DialogTitle>
                                </DialogHeader>
                                {user.photoUrl && (
                                    <Image
                                        src={user.photoUrl}
                                        alt={user.name}
                                        width={800}
                                        height={800}
                                        className="rounded-lg object-contain"
                                    />
                                )}
                            </DialogContent>
                        </Dialog>
                        {user.photoUrl && (
                            <p className="mt-2 text-sm text-muted-foreground">Click to enlarge</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
