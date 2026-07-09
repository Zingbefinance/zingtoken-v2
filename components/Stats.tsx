export default function Stats() {
  return (
    <section
      id="stats"
      className="py-16 bg-[#0f1720]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          Live Statistics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-black rounded-xl p-6 text-center border border-green-500">
            <h3 className="text-gray-400">Price</h3>
            <p className="text-2xl font-bold text-green-400">
              $0.000000
            </p>
          </div>

          <div className="bg-black rounded-xl p-6 text-center border border-green-500">
            <h3 className="text-gray-400">Market Cap</h3>
            <p className="text-2xl font-bold text-green-400">
              $0
            </p>
          </div>

          <div className="bg-black rounded-xl p-6 text-center border border-green-500">
            <h3 className="text-gray-400">Holders</h3>
            <p className="text-2xl font-bold text-green-400">
              0
            </p>
          </div>

          <div className="bg-black rounded-xl p-6 text-center border border-green-500">
            <h3 className="text-gray-400">Supply</h3>
            <p className="text-2xl font-bold text-green-400">
              100M
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}