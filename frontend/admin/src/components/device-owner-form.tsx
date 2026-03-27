
'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { FormState } from '@/lib/actions';
import type { DeviceOwner } from '@/lib/definitions';
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
        'Create Device Owner'
      )}
    </Button>
  );
}

export function DeviceOwnerForm({
  owner,
  action,
  currentPage = '1',
}: {
  owner?: DeviceOwner;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  currentPage?: string;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const initialState: FormState = { 
      message: '', 
      errors: {}, 
      success: false,
      fields: {
        name: owner?.name || '',
        address: owner?.address || '',
        email: owner?.email || '',
        phoneNumber: owner?.phoneNumber || '',
        socialMediaUrl: owner?.socialMediaUrl || '',
      }
  };
  const [state, formAction] = useActionState(action, initialState);

  const [formState, setFormState] = useState(initialState.fields);

  useEffect(() => {
    if(state.fields) {
        setFormState(state.fields);
    }
  }, [state.fields]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }
  
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
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          aria-describedby="name-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={formState.address}
          onChange={handleInputChange}
          aria-describedby="address-error"
        />
        <div id="address-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.address &&
            state.errors.address.map((error: string) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleInputChange}
          aria-describedby="email-error"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="+63XXXXXXXXXX"
            value={formState.phoneNumber}
            onChange={handleInputChange}
            aria-describedby="phoneNumber-error"
            className="w-auto"
        />
        <div id="phoneNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.phoneNumber &&
                state.errors.phoneNumber.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                    {error}
                </p>
            ))}
        </div>
      </div>

      <div className="space-y-2">
          <Label htmlFor="socialMediaUrl">Social Media URL</Label>
          <Input
              id="socialMediaUrl"
              name="socialMediaUrl"
              type="url"
              value={formState.socialMediaUrl}
              onChange={handleInputChange}
              aria-describedby="socialMediaUrl-error"
          />
          <div id="socialMediaUrl-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.socialMediaUrl &&
                  state.errors.socialMediaUrl.map((error: string) => (
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
          onClick={() => router.push(owner ? `/device-owners?page=${currentPage}` : '/device-owners')}
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          Cancel
        </Button>
        <SubmitButton isEditing={!!owner} />
      </div>
    </form>
  );
}
