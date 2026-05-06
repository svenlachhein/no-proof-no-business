import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "E-Mail fehlt." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      return NextResponse.json(
        { error: "Server nicht konfiguriert." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || "Eintrag fehlgeschlagen." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Unerwarteter Fehler." },
      { status: 500 }
    );
  }
}
