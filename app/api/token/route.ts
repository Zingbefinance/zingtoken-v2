export async function GET() {
  const pair =
    "2nqakcvvk4pbxrhzn9v4lg1cuw7kzyx4gyp5fdz4";

  const res = await fetch(
    `https://api.dexscreener.com/latest/dex/pairs/solana/${pair}`
  );

  const data = await res.json();

  return Response.json(data.pair);
}