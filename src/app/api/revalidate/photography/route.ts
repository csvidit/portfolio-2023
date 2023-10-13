import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: `Invalid secret - ${secret}` }, { status: 401 });
  }

  revalidatePath("/photography");

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
