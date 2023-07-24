import { z } from "zod";

export const userSchema = z
    .object({
      firstName: z.string().min(3, { message: 'First Name must contain at least 3 character(s)' }).max(25),
      lastName: z.string().min(3, { message: 'Last Name must contain at least 3 character(s)' }).max(25),
      email: z.string().min(1, { message: "Email is required" }).email({ message: "Must be a valid email" }),
      age: z.number().min(18, { message: "Age Must be above 18" }).max(70),
      password: z.string().min(3,{message:'Password must contain at least 3 character(s)'}).max(20),
      confirmPassword: z.string().min(3,{message:'Password must contain at least 3 character(s)'}).max(20),
    })
    .refine((userData) => userData.password === userData.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

    export type User = z.infer<typeof userSchema>;