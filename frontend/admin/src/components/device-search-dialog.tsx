
'use client';

import { useState, useTransition } from 'react';
import { Search, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Device } from '@/lib/definitions';
import { searchAvailableDevices } from '@/lib/data';
import { useDebouncedCallback } from 'use-debounce';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};

const statusVariants = {
  available: 'default',
  offline: 'secondary',
  maintenance: 'secondary',
  deactivated: 'outline',
  assigned: 'secondary',
} as const;

export function DeviceSearchDialog({ onDeviceSelect }: { onDeviceSelect: (device: Device) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Device[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = useDebouncedCallback((term: string) => {
    setQuery(term);
    startTransition(async () => {
        if (term.length > 2) {
            const devices = await searchAvailableDevices(term);
            setResults(devices);
        } else {
            setResults([]);
        }
    });
  }, 300);

  const handleSelectDevice = (device: Device) => {
    onDeviceSelect(device);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Search</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Search for an Available Device</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by serial number..."
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="mt-4 max-h-[300px] overflow-auto">
            {isPending ? (
                <div className="flex justify-center items-center p-4">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Serial Number</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.length > 0 ? (
                            results.map((device) => (
                                <TableRow key={device.id}>
                                    <TableCell>{device.serialNumber}</TableCell>
                                    <TableCell>{deviceTypeLabels[device.deviceType]}</TableCell>
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
                                    <TableCell className="text-right">
                                        <Button size="sm" onClick={() => handleSelectDevice(device)} disabled={device.status === 'deactivated'}>
                                            Select
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    {query.length > 2 ? "No devices found." : "Enter at least 3 characters to search."}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
