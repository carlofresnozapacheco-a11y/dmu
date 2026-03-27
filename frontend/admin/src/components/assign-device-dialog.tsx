
'use client';

import { useEffect, useState, useActionState, useMemo } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { assignDeviceToOwner, FormState } from '@/lib/actions';
import { Device } from '@/lib/definitions';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useFormStatus } from 'react-dom';
import { DeviceSearchDialog } from './device-search-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Assigning...
          </>
        ) : (
          'Assign Device'
        )}
      </Button>
    );
}

export function AssignDeviceDialog({ ownerId }: { ownerId: string }) {
  const [open, setOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const { toast } = useToast();
  const [activatedDate, setActivatedDate] = useState('');
  const [assignmentSelection, setAssignmentSelection] = useState<'kwh-meter' | 'timer' | undefined>(undefined);

  useEffect(() => {
    if (open) {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      setActivatedDate(`${year}-${month}-${day}`);
    } else {
      setAssignmentSelection(undefined);
    }
  }, [open]);
  
  const initialState: FormState = { message: '', errors: {} };
  const assignDeviceWithOwnerId = assignDeviceToOwner.bind(null, ownerId);
  const [state, formAction] = useActionState(assignDeviceWithOwnerId, initialState);


  useEffect(() => {
    if (state?.message) {
        const variant = state.errors && Object.keys(state.errors).length > 0 ? 'destructive' : 'default';
        toast({
            title: variant === 'destructive' ? 'Error' : 'Success',
            description: state.message,
            variant: variant,
        });

        if (!state.errors || Object.keys(state.errors).length === 0) {
            setOpen(false);
            setSelectedDevice(null);
        }
    }
  }, [state, toast]);

  const handleDeviceSelect = (device: Device) => {
    setSelectedDevice(device);
    setAssignmentSelection(undefined); // Reset on new device selection
  };
  
  const showAssignmentType = selectedDevice?.deviceType === 'kwh-meter-timer';

  const showChargePerKwh = useMemo(() => {
    if (!selectedDevice) return false;
    if (selectedDevice.deviceType === 'kwh-meter') return true;
    if (selectedDevice.deviceType === 'kwh-meter-timer' && assignmentSelection === 'kwh-meter') return true;
    return false;
  }, [selectedDevice, assignmentSelection]);

  const showChargePerMinute = useMemo(() => {
    if (!selectedDevice) return false;
    if (selectedDevice.deviceType === 'timer') return true;
    if (selectedDevice.deviceType === 'kwh-meter-timer' && assignmentSelection === 'timer') return true;
    return false;
  }, [selectedDevice, assignmentSelection]);

  const assignmentType = useMemo(() => {
    if (selectedDevice?.deviceType === 'kwh-meter') return 'kwh-meter';
    if (selectedDevice?.deviceType === 'timer') return 'timer';
    return assignmentSelection;
  }, [selectedDevice, assignmentSelection]);


  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
            setSelectedDevice(null);
        }
    }}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Assign Device
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign a New Device</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
            <input type="hidden" name="deviceId" value={selectedDevice?.id || ''} />
            <input type="hidden" name="activatedDate" value={activatedDate} />
            {assignmentType && <input type="hidden" name="assignmentType" value={assignmentType} />}
            <div className="space-y-2">
                <Label htmlFor="deviceId">Device</Label>
                <div className="flex items-center gap-2">
                    <Input
                        id="selectedDevice"
                        name="selectedDevice"
                        readOnly
                        value={selectedDevice ? `${selectedDevice.serialNumber}` : 'No device selected'}
                        className="flex-1"
                    />
                    <DeviceSearchDialog onDeviceSelect={handleDeviceSelect} />
                </div>
                 <div id="deviceId-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.deviceId &&
                        state.errors.deviceId.map((error: string) => (
                        <p className="mt-2 text-sm text-destructive" key={error}>
                            {error}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className="flex items-end gap-4">
              {selectedDevice && (
                  <div className="space-y-2 flex-1">
                      <Label>Device Type</Label>
                      <p className="text-sm text-muted-foreground h-10 flex items-center">{deviceTypeLabels[selectedDevice.deviceType]}</p>
                  </div>
              )}
              {showAssignmentType && (
                <div className="space-y-2 flex-1">
                  <Label htmlFor="assignmentType">Assign As</Label>
                  <Select 
                    name="assignmentType" 
                    onValueChange={(value: 'kwh-meter' | 'timer') => setAssignmentSelection(value)}
                    value={assignmentSelection}
                  >
                    <SelectTrigger id="assignmentType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kwh-meter">KWH Meter</SelectItem>
                      <SelectItem value="timer">Timer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {showChargePerKwh && (
                    <div className="space-y-2">
                        <Label htmlFor="chargePerKwh">Charge Per KWH</Label>
                        <Input
                            id="chargePerKwh"
                            name="chargePerKwh"
                            type="number"
                            step="0.01"
                            placeholder="e.g. 0.15"
                            aria-describedby="chargePerKwh-error"
                            disabled={!selectedDevice}
                        />
                        <div id="chargePerKwh-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.chargePerKwh &&
                                state.errors.chargePerKwh.map((error: string) => (
                                <p className="mt-2 text-sm text-destructive" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
                {showChargePerMinute && (
                    <div className="space-y-2">
                        <Label htmlFor="chargePerMinute">Charge Per minute</Label>
                        <Input
                            id="chargePerMinute"
                            name="chargePerMinute"
                            type="number"
                            step="0.01"
                            placeholder="e.g. 0.05"
                            aria-describedby="chargePerMinute-error"
                            disabled={!selectedDevice}
                        />
                        <div id="chargePerMinute-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.chargePerMinute &&
                                state.errors.chargePerMinute.map((error: string) => (
                                <p className="mt-2 text-sm text-destructive" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <SubmitButton />
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
