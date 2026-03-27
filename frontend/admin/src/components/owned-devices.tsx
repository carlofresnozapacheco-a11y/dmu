
'use client';

import type { OwnedDeviceWithDetails, Device } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';
import { Button } from './ui/button';
import { EditDeviceAssignmentDialog } from './edit-device-assignment-dialog';
import { UnassignDeviceDialog } from './unassign-device-dialog';
import { AssignDeviceDialog } from './assign-device-dialog';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';


const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
}

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

export function OwnedDevices({ devices, ownerId }: { devices: OwnedDeviceWithDetails[], ownerId: string }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Owned Devices</CardTitle>
                <AssignDeviceDialog ownerId={ownerId} />
            </CardHeader>
            <CardContent>
                {devices.length > 0 ? (
                     <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Device Serial Number</TableHead>
                                    <TableHead>Device Type</TableHead>
                                    <TableHead>Assigned As</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Charge/KWH</TableHead>
                                    <TableHead>Charge/min</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {devices.map(device => {
                                    return (
                                        <TableRow key={device.id}>
                                            <TableCell className="font-medium">{device.deviceSerialNumber}</TableCell>
                                            <TableCell>{deviceTypeLabels[device.deviceType]}</TableCell>
                                            <TableCell>
                                                {device.assignmentType ? deviceTypeLabels[device.assignmentType] : 'N/A'}
                                            </TableCell>
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
                                            <TableCell>
                                                {`PHP ${(device.chargePerKwh || 0).toFixed(2)}`}
                                            </TableCell>
                                            <TableCell>
                                                {`PHP ${(device.chargePerMinute || 0).toFixed(2)}`}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end items-center gap-2">
                                                    <EditDeviceAssignmentDialog assignment={device} />
                                                    <UnassignDeviceDialog assignmentId={device.id} deviceId={device.deviceId} ownerId={device.ownerId}/>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="text-center text-muted-foreground py-8">
                        <p>This owner has no assigned devices.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
