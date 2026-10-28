import { z } from 'zod';

export const AuthRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  organizationName: z.string().min(2),
});

export const AuthLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type AuthRegisterInput = z.infer<typeof AuthRegisterSchema>;
export type AuthLoginInput = z.infer<typeof AuthLoginSchema>;
