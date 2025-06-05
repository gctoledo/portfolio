import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  subject: z.string().min(5, "O assunto precisa ter pelo menos 5 caracteres"),
  email: z.string().email("Insira um email valido"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+?55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(val),
      {
        message: "Insira um telefone válido",
      }
    ),
  message: z
    .string()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});
