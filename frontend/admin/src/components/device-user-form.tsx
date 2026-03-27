
'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { FormState } from '@/lib/actions';
import type { DeviceUser } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
        'Create Device User'
      )}
    </Button>
  );
}

export function DeviceUserForm({
  user,
  action,
  currentPage = '1',
}: {
  user?: DeviceUser;
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
      name: user?.name || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      socialMediaUrl: user?.socialMediaUrl || '',
      photoUrl: user?.photoUrl || '',
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
       <div className="flex flex-col items-center gap-2">
        <Dialog>
            <DialogTrigger asChild disabled={!formState.photoUrl}>
                <Avatar className="h-24 w-24 cursor-pointer">
                    <AvatarImage src={formState.photoUrl} alt={formState.name} />
                    <AvatarFallback>
                        <User className="h-12 w-12" />
                    </AvatarFallback>
                </Avatar>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle>{formState.name || 'User Photo'}</DialogTitle>
              </DialogHeader>
              {formState.photoUrl && (
                  <Image
                      src={formState.photoUrl}
                      alt={formState.name}
                      width={800}
                      height={800}
                      className="rounded-lg object-contain"
                  />
              )}
            </DialogContent>
        </Dialog>
        <Label htmlFor="photoUrl" className="text-sm text-muted-foreground cursor-pointer">
          Click to enlarge
        </Label>
       </div>
       <div className="space-y-2">
        <Label htmlFor="photoUrl">Photo URL</Label>
        <Input
          id="photoUrl"
          name="photoUrl"
          type="url"
          value={formState.photoUrl}
          onChange={handleInputChange}
          aria-describedby="photoUrl-error"
          placeholder="https://example.com/photo.jpg"
        />
        <div id="photoUrl-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.photoUrl &&
            state.errors.photoUrl.map((error: string) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
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
          onClick={() => router.push(user ? `/device-users?page=${currentPage}` : '/device-users')}
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          Cancel
        </Button>
        <SubmitButton isEditing={!!user} />
      </div>
    </form>
  );
}
