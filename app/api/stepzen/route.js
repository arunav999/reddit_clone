export async function POST(req) {
  const body = await req.json();

  const response = await fetch(
    "https://jabaltscheni.us-east-a.ibm.stepzen.net/api/waxen-jackal/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
