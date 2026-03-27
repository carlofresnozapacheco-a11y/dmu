
'use client';

import { useActionState, useEffect, useState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { FormState } from '@/lib/actions';
import type { Device, DeviceModel } from '@/lib/definitions';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Saving...
        </>
      ) : isEditing ? (
        'Save Changes'
      ) : (
        'Create Device'
      )}
    </Button>
  );
}

const deviceTypeLabels: Record<DeviceModel['feature'], string> = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};

export function DeviceForm({
  device,
  action,
  backHref,
  currentPage = '1',
  deviceModels = [],
}: {
  device?: Device;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  backHref?: string;
  currentPage?: string;
  deviceModels?: DeviceModel[];
}) {
  const router = useRouter();
  const { toast } = useToast();
  const initialState: FormState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(action, initialState);
  
  const isEditing = !!device;
  const [status, setStatus] = useState(device?.status || 'manufactured');

  const [selectedModel, setSelectedModel] = useState<DeviceModel | undefined>(() => 
    device ? deviceModels.find(m => m.deviceModel === device.modelNumber) : undefined
  );
  const [deviceType, setDeviceType] = useState<DeviceModel['feature'] | undefined>(
    device?.deviceType
  );

  const [manufacturedDate, setManufacturedDate] = useState(() => {
    return device?.manufacturedDate ? new Date(device.manufacturedDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  });
  const formRef = useRef<HTMLFormElement>(null);
  
  const finalBackUrl = backHref || (device ? `/devices?page=${currentPage}` : '/devices');

  useEffect(() => {
    if (!state) return;

    if (state.success && state.message) {
      // Message is now handled by the server action redirect
    } else if (!state.success && state.message) {
      toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
      });
    }
  }, [state, toast]);

  const handleModelChange = (modelNumber: string) => {
    const model = deviceModels.find(m => m.deviceModel === modelNumber);
    setSelectedModel(model);
    if (model) {
      setDeviceType(model.feature);
    } else {
      setDeviceType(undefined);
    }
  };

  useEffect(() => {
    if (device && deviceModels.length > 0) {
        const initialModel = deviceModels.find(m => m.deviceModel === device.modelNumber);
        if (initialModel) {
            setSelectedModel(initialModel);
            setDeviceType(initialModel.feature);
        }
    }
  }, [device, deviceModels]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <input type="hidden" name="page" value={currentPage} />
      <input type="hidden" name="backHref" value={backHref} />
      {deviceType && <input type="hidden" name="deviceType" value={deviceType} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="serialNumber">Serial Number</Label>
          <Input
            id="serialNumber"
            name="serialNumber"
            defaultValue={device?.serialNumber}
            aria-describedby="serialNumber-error"
            readOnly={!!device}
          />
          <div id="serialNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.serialNumber &&
              state.errors.serialNumber.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="modelNumber">Model No.</Label>
          <Select 
            name="modelNumber" 
            defaultValue={device?.modelNumber}
            onValueChange={handleModelChange}
          >
            <SelectTrigger id="modelNumber" aria-describedby="modelNumber-error">
                <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
                {deviceModels.map((model) => (
                    <SelectItem key={model.id} value={model.deviceModel}>
                        {model.deviceModel}
                    </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <div id="modelNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.modelNumber &&
              state.errors.modelNumber.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="deviceType">Device Type</Label>
           <Input
            id="deviceTypeDisplay"
            name="deviceTypeDisplay"
            readOnly
            value={deviceType ? deviceTypeLabels[deviceType] : 'Select a model to see its type'}
            className="bg-muted"
            aria-describedby="deviceType-error"
          />
          <div id="deviceType-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.deviceType &&
              state.errors.deviceType.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select name="status" defaultValue={status} onValueChange={setStatus} disabled={!isEditing}>
            <SelectTrigger id="status" aria-describedby="status-error">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unassigned">Unassigned</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="deactivated">Deactivated</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="assigned">Assigned</SelectItem>
              <SelectItem value="manufactured">Manufactured</SelectItem>
            </SelectContent>
          </Select>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      {status === 'maintenance' && (
        <div className="space-y-2">
            <Label htmlFor="maintenanceReason">Maintenance Reason</Label>
            <Textarea
                id="maintenanceReason"
                name="maintenanceReason"
                defaultValue={device?.maintenanceReason || ''}
                aria-describedby="maintenanceReason-error"
                placeholder="Enter the reason for maintenance"
            />
            <div id="maintenanceReason-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.maintenanceReason &&
                    state.errors.maintenanceReason.map((error: string) => (
                    <p className="mt-2 text-sm text-destructive" key={error}>
                        {error}
                    </p>
                ))}
            </div>
        </div>
      )}

      {status === 'deactivated' && (
        <div className="space-y-2">
            <Label htmlFor="deactivatedReason">Deactivated Reason</Label>
            <Textarea
                id="deactivatedReason"
                name="deactivatedReason"
                defaultValue={device?.deactivatedReason || ''}
                aria-describedby="deactivatedReason-error"
                placeholder="Enter the reason for deactivation"
            />
            <div id="deactivatedReason-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.deactivatedReason &&
                    state.errors.deactivatedReason.map((error: string) => (
                    <p className="mt-2 text-sm text-destructive" key={error}>
                        {error}
                    </p>
                ))}
            </div>
        </div>
      )}


      <div className="space-y-2">
        <Label htmlFor="manufacturedDate">Manufactured Date</Label>
        <Input 
            id="manufacturedDate"
            name="manufacturedDate"
            type="date"
            value={manufacturedDate}
            onChange={(e) => setManufacturedDate(e.target.value)}
            aria-describedby="manufacturedDate-error"
            className="block"
        />
        <div id="manufacturedDate-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.manufacturedDate &&
                state.errors.manufacturedDate.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                    {error}
                </p>
            ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push(finalBackUrl)}
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          Cancel
        </Button>
        <SubmitButton isEditing={!!device} />
      </div>
    </form>
  );
}
