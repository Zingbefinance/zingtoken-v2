export async function GET() {
  const pair =
    "2nqakcvvk4pbxrhzn9v4lg1cuhzbpyl1reowhpvjzuhn";

  const res = await fetch(
    `https://api.dexscreener.com/latest/dex/pairs/solana/${pair}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const p = data.pair;

  return Response.json({
    price: `$${Number(p.priceUsd).toFixed(6)}`,
    holders: "109+",
    marketCap: p.marketCap
      ? `$${Number(p.marketCap).toLocaleString()}`
      : "N/A",
    liquidity: p.liquidity?.usd
      ? `$${Number(p.liquidity.usd).toLocaleString()}`
      : "Locked",
  });
}