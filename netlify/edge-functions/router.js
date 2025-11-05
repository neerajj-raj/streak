export default async (request, context) => {
  const url = new URL(request.url);

  const referer = request?.headers?.get("referer") ?? null;
  const refererUrl = referer ? new URL(referer) : null;

  const streakPaths = new Set([
    "/",
    "/assets/js/asset-worker.js",
    "/about-us/",
    "/about-us",
    "/blog",
    "/blog/",
  ]);

  const isAsset =
    /\.(png|jpe?g|gif|svg|webp|ico|css|js|woff2?|ttf|eot|json|vtt)$/i.test(
      url.pathname
    );

  // Serve to Streak.js
  if (
    streakPaths.has(url?.pathname) ||
    (isAsset && streakPaths?.has(refererUrl?.pathname ?? "")) ||
    refererUrl?.pathname?.includes("/secondary-css.css")
  ) {
    console.log(
      `🪶 Requested url:"${url.pathname}" or referer:"${refererUrl?.pathname}" to Streak.js`
    );
    return context.next();
  }

  // Proxy everything else to Next.js
  const NEXT_APP_DOMAIN = Deno.env.get("WP_APP_BASE_URL") ?? "";
  const target = NEXT_APP_DOMAIN + url.pathname + url.search;
  const response = await fetch(target, { headers: request.headers });

  console.log(`➡️ Requested url:"${url.pathname + url.search}" to Next.js app`);

  // Return proxied response
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
};
