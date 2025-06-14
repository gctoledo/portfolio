"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Input from "./Input";

const contactSchema = z.object({
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

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="block space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
        <div>
          <Input placeholder="Nome" {...register("name")} type="text" />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input placeholder="Telefone" type="tel" {...register("phone")} />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Input placeholder="Assunto" {...register("subject")} type="text" />
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Mensagem"
          {...register("message")}
          className="w-full p-2 border rounded bg-zinc-800 border-zinc-800 outline-none focus:border-zinc-800 focus:ring-0 text-zinc-400 text-sm"
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-all duration-300 disabled:bg-blue-200 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 text-center">
          Mensagem enviada com sucesso!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </form>
  );
}
