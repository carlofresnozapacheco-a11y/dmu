
import { z } from 'zod';

export const BaseDeviceSchema = z.object({
  serialNumber: z.string().min(5, { message: 'Serial number must be at least 5 characters.' }),
  modelNumber: z.string().min(1, { message: 'Model number is required.' }),
  deviceType: z.enum(['kwh-meter', 'timer', 'kwh-meter-timer'], {
    errorMap: () => ({ message: 'Please select a valid device type.' }),
  }),
  status: z.enum(['available', 'offline', 'maintenance', 'deactivated', 'running', 'error', 'assigned', 'manufactured', 'unassigned'], {
    errorMap: () => ({ message: 'Please select a valid status.' }),
  }),
  manufacturedDate: z.string().refine((val) => !isNaN(Date.parse(val)) && val, {
    message: 'Please enter a valid date.',
  }),
  deactivatedReason: z.string().optional().nullable(),
  maintenanceReason: z.string().optional().nullable(),
});

const refinedValidation = (data: z.infer<typeof BaseDeviceSchema>, ctx: z.RefinementCtx) => {
    if (data.status === 'maintenance' && (!data.maintenanceReason || data.maintenanceReason.trim().length === 0)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['maintenanceReason'],
            message: 'Maintenance reason is required when status is Maintenance.',
        });
    }
    if (data.status === 'deactivated' && (!data.deactivatedReason || data.deactivatedReason.trim().length === 0)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['deactivatedReason'],
            message: 'Deactivation reason is required when status is Deactivated.',
        });
    }
    if (!data.deviceType) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['deviceType'],
            message: 'Device type is required and derived from the selected model.',
        });
    }
};

export const DeviceSchema = BaseDeviceSchema.superRefine(refinedValidation);

export const CreateDeviceSchema = BaseDeviceSchema.extend({
    status: BaseDeviceSchema.shape.status.optional(),
}).superRefine(refinedValidation);


export const DeviceOwnerSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    socialMediaUrl: z.string().url({ message: 'Please enter a valid URL.' }),
    phoneNumber: z.string().optional(),
});

const chargePerKwhSchema = z.preprocess(
  (val) => (val === "" || val === null ? 0 : val),
  z.coerce.number({ invalid_type_error: "Please enter a valid number." })
    .min(0, { message: "Please enter a non-negative number." })
);

const chargePerMinuteSchema = z.preprocess(
  (val) => (val === "" || val === null ? 0 : val),
  z.coerce.number({ invalid_type_error: "Please enter a valid number." })
    .min(0, { message: "Please enter a non-negative number." })
);


export const OwnerDeviceSchema = z.object({
    deviceId: z.string({ required_error: 'Please select a device.' }).min(1, { message: 'Please select a device.' }),
    ownerId: z.string(),
    activatedDate: z.string().refine((val) => !isNaN(Date.parse(val)) && val, {
        message: 'Please enter a valid date.',
    }),
    chargePerKwh: chargePerKwhSchema,
    chargePerMinute: chargePerMinuteSchema,
    assignmentType: z.preprocess(
        (val) => (val === "" || val === null ? undefined : val),
        z.enum(['kwh-meter', 'timer']).optional()
    ),
});

export const DeviceUserSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    socialMediaUrl: z.string({ required_error: 'Social media URL is required.' }).url({ message: 'Please enter a valid URL.' }),
    phoneNumber: z.string().optional(),
    photoUrl: z.string({ required_error: 'Photo URL is required.' }).url({ message: 'Please enter a valid URL.' })
    .refine(url => /\.(jpg|jpeg|png|svg)$/i.test(new URL(url).pathname), { message: 'URL must end with .jpg, .jpeg, .png, or .svg' }),
});

export const DeviceModelSchema = z.object({
    deviceModel: z.string().min(1, { message: 'Device model is required.' }),
    feature: z.enum(['kwh-meter', 'timer', 'kwh-meter-timer'], {
      errorMap: () => ({ message: 'Please select a valid feature.' }),
    }),
});
