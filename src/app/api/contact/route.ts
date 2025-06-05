import { contactSchema } from "@/app/_types/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { success, data, error } = contactSchema.safeParse(body);

  if (!success) {
    return new NextResponse(JSON.stringify(error.flatten().fieldErrors), {
      status: 400,
    });
  }

  const { name, subject, email, phone, message } = data;

  try {
    await resend.emails.send({
      from: String(process.env.RESEND_FROM),
      to: String(process.env.CONTACT_EMAIL),
      subject: subject,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "-"}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}
