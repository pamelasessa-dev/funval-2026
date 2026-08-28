import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  description: z
    .string()
    .trim()
    .min(1, "La descripción es obligatoria"),

  price: z
    .number()
    .positive("El precio debe ser mayor a 0"),

  cost: z
    .number()
    .nonnegative("El costo no puede ser negativo")
    .default(0),

  stock: z
    .number()
    .int("El stock debe ser un número entero")
    .nonnegative("El stock no puede ser negativo")
    .default(0),
});

export const updateProductSchema = createProductSchema.partial();