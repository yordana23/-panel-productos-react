import * as Yup from "yup";

export const productoSchema = Yup.object({
  nombre: Yup.string()
    .trim()
    .required("El nombre es obligatorio")
    .max(100, "El nombre no puede superar 100 caracteres"),
  precio: Yup.number()
    .typeError("Ingresa un precio válido")
    .required("El precio es obligatorio")
    .moreThan(0, "El precio debe ser mayor que cero"),
  stock: Yup.number()
    .typeError("Ingresa un stock válido")
    .required("El stock es obligatorio")
    .integer("El stock debe ser un número entero")
    .min(0, "El stock no puede ser negativo"),
});
