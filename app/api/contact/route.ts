import { NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create Discord embed
    const embed = {
      title: "New Contact Form Submission",
      color: 0x9C27B0, // Purple color
      fields: [
        {
          name: "Name",
          value: name,
          inline: true,
        },
        {
          name: "Email",
          value: email,
          inline: true,
        },
        {
          name: "Message",
          value: message,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Portfolio Contact Form",
      },
    };

    // Send to Discord webhook
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Discord");
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
} 