import {z} from "zod";

export const customerSchema = z.object({
    name: z.string().min(1, "El nombre es de caracter obligatorio."),
    email: z.string().email("El email ingresado no es válido."),
    phone: z.string().min(1, "El telefono es obligatorio."),
    address: z.string().min(1,"La direccion es obligatoria."),
});

export const updateCustomerSchema = z.object({
    name: z.string().min(1, "El nombre es de caracter obligatorio."),
    email: z.string().email("El email ingresado no es válido."),
    phone: z.string().min(1, "El telefono es obligatorio."),
    address: z.string().min(1,"La direccion es obligatoria."),
});