import { NextRequest, NextResponse } from "next/server";
import { getRedisClient } from "@/lib/redis";
import { getRateLimiter } from "@/lib/ratelimit";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return NextResponse.json({ count: 42, isMock: true });
    }

    const count = (await redis.get<number>("portfolio:likes")) || 0;
    return NextResponse.json({ count: Number(count) });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return NextResponse.json({ count: 43, isMock: true });
    }

    // Protection against spam / bots via Upstash Rate Limiting
    const ratelimiter = getRateLimiter();
    if (ratelimiter) {
      const forwardedFor = request.headers.get("x-forwarded-for");
      const ip =
        forwardedFor?.split(",")[0].trim() ||
        request.headers.get("x-real-ip") ||
        "127.0.0.1";

      const { success, limit, remaining, reset } = await ratelimiter.limit(ip);
      if (!success) {
        return NextResponse.json(
          {
            error: "Rate limit reached. Please wait a moment!",
            limit,
            remaining,
            reset,
          },
          { status: 429 }
        );
      }
    }

    const count = await redis.incr("portfolio:likes");
    return NextResponse.json({ count: Number(count) });
  } catch (error) {
    console.error("Error incrementing likes:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
