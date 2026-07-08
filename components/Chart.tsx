export default function Chart() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-green-400 text-center mb-10">
          Live Chart
        </h2>

        <iframe
          src="https://dexscreener.com/solana/2nqakcvvk4pbxrhzn9v4lg1cuhzbpyl1reowhpvjzuhn?embed=1&theme=dark"
          width="100%"
          height="700"
          style={{ border: "0", borderRadius: "16px" }}
        />
      </div>
    </section>
  );
}