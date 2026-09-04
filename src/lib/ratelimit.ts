import { Ratelimit } from "@upstash/ratelimit";
import { getRedisClient } from "@/lib/redis";

let ratelimit: Ratelimit | null = null;

export function getRateLimiter(): Ratelimit | null {
  if (ratelimit) return ratelimit;

  const redis = getRedisClient();
  if (!redis) return null;

  // Rate limiter: Max 15 claps per IP every 60 seconds (sliding window)
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(15, "60 s"),
    analytics: false,
    prefix: "ratelimit:likes",
  });

  return ratelimit;
}
