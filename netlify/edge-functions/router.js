export default async (request, context) => {
  return new Response(
    JSON.stringify({
      message: "Hello from Netlify Edge Function 🌍",
      time: new Date().toISOString(),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
