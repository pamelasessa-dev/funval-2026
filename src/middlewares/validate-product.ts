import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

const productSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .trim(),

  description: z
    .string()
    .min(1, "La descripción es obligatoria")
    .trim(),

  price: z
    .number()
    .positive("El precio debe ser mayor a cero"),

  cost: z
    .number()
    .min(0, "El costo no puede ser valor negativo")
    .optional(),

  stock: z
    .number()
    .int("El stock debe ser un número entero")
    .min(0, "El stock no puede ser un número negativo")
    .optional(),
});

export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Datos no válidos",
      details: result.error.issues,
    });

    return;
  }

  next();
};