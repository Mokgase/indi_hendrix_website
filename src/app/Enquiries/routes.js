import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  // send email / save file / DB here

  return NextResponse.json({ success: true });
}
