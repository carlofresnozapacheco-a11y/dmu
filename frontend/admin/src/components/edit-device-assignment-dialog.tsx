
'use client';

import { useEffect, useState, useActionState, useMemo } from 'react';
import { Edit, Loader2 } from 'lucide-react';
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
import { updateDeviceAssignment, FormState } from '@/lib/actions';
import { OwnedDeviceWithDetails } from '@/lib/definitions';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useFormStatus } from 'react-dom';
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
            Saving...
          </>
        ) : (
          'Save Changes'
        )}
      </Button>
    );
}

export function EditDeviceAssignmentDialog({ assignment }: { assignment: OwnedDeviceWithDetails }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [currentAssignmentType, setCurrentAssignmentType] = useState(assignment.assignmentType);

  
  const initialState: FormState = { message: '', errors: {} };
  const updateDeviceAssignmentWithIds = updateDeviceAssignment.bind(null, assignment.id, assignment.ownerId);
  const [state, formAction] = useActionState(updateDeviceAssignmentWithIds, initialState);

  useEffect(() => {
    if (state?.message) {
        const variant = state.success === false ? 'destructive' : 'default';
        toast({
            title: variant === 'destructive' ? 'Error' : 'Success',
            description: state.message,
            variant: variant,
        });

        if (state.success) {
            setOpen(false);
        }
    }
  }, [state, toast]);
  
  const showAssignmentType = assignment.deviceType === 'kwh-meter-timer';

  const showChargePerKwh = useMemo(() => {
    if (assignment.deviceType === 'kwh-meter') return true;
    if (assignment.deviceType === 'kwh-meter-timer' && currentAssignmentType === 'kwh-meter') return true;
    return false;
  }, [assignment.deviceType, currentAssignmentType]);
  
  const showChargePerMinute = useMemo(() => {
    if (assignment.deviceType === 'timer') return true;
    if (assignment.deviceType === 'kwh-meter-timer' && currentAssignmentType === 'timer') return true;
    return false;
  }, [assignment.deviceType, currentAssignmentType]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="mr-2 h-4 w-4" /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Device Assignment</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <p className="font-medium text-sm">Device</p>
                    <p className="text-sm text-muted-foreground">{assignment.deviceSerialNumber}</p>
                    <p className="text-xs text-muted-foreground">({deviceTypeLabels[assignment.deviceType]})</p>
                </div>
                {showAssignmentType && (
                    <div className="space-y-2">
                        <Label htmlFor="assignmentType">Assigned As</Label>
                        <Select 
                          name="assignmentType" 
                          defaultValue={currentAssignmentType}
                          onValueChange={(value: 'kwh-meter' | 'timer') => setCurrentAssignmentType(value)}
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

            <div className="space-y-2">
                <Label htmlFor="activatedDate">Activated Date</Label>
                <Input
                    id="activatedDate"
                    name="activatedDate"
                    type="date"
                    defaultValue={assignment.activatedDate}
                    aria-describedby="activatedDate-error"
                    readOnly
                />
                 <div id="activatedDate-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.activatedDate &&
                        state.errors.activatedDate.map((error: string) => (
                        <p className="mt-2 text-sm text-destructive" key={error}>
                            {error}
                        </p>
                    ))}
                </div>
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
                            defaultValue={assignment.chargePerKwh ?? ''}
                            aria-describedby="chargePerKwh-error"
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
                            defaultValue={assignment.chargePerMinute ?? ''}
                            aria-describedby="chargePerMinute-error"
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
