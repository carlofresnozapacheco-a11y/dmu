
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { FormState } from '@/lib/actions';
import type { DeviceModel } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
        'Create Device Model'
      )}
    </Button>
  );
}

export function DeviceModelForm({
  model,
  action,
  currentPage = '1',
}: {
  model?: DeviceModel;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  currentPage?: string;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const initialState: FormState = { message: '', errors: {} };
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      // Redirect is handled by server action
    } else if (state.message) {
        toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
        });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="page" value={currentPage} />
      <div className="space-y-2">
        <Label htmlFor="deviceModel">Device Model</Label>
        <Input
          id="deviceModel"
          name="deviceModel"
          defaultValue={model?.deviceModel}
          aria-describedby="deviceModel-error"
        />
        <div id="deviceModel-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.deviceModel &&
            state.errors.deviceModel.map((error: string) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="feature">Feature</Label>
        <Select name="feature" defaultValue={model?.feature}>
            <SelectTrigger id="feature" aria-describedby="feature-error">
                <SelectValue placeholder="Select a feature" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="kwh-meter">KWH Meter</SelectItem>
                <SelectItem value="timer">Timer</SelectItem>
                <SelectItem value="kwh-meter-timer">KWH Meter/Timer</SelectItem>
            </SelectContent>
        </Select>
        <div id="feature-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.feature &&
            state.errors.feature.map((error: string) => (
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
          onClick={() => router.push(model ? `/device-models?page=${currentPage}` : '/device-models')}
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          Cancel
        </Button>
        <SubmitButton isEditing={!!model} />
      </div>
    </form>
  );
}
