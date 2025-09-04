import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Cinemark logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-white">Cinemark</span>
          </div>
          <Link
            href="/privacy-policy"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Zásady ochrany soukromí
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Cinemark logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cinemark
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            tvůj filmový průvodce 🎬✨
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cinemark je moderní aplikace pro všechny filmové a seriálové nadšence.
            Už žádné zdlouhavé hledání, kde se dá tvůj oblíbený titul pustit –
            Cinemark ti okamžitě ukáže, na jaké streamovací službě je dostupný.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📺</div>
            <h3 className="text-xl font-semibold text-white mb-3">Kde sledovat</h3>
            <p className="text-gray-300 text-sm">
              Zjisti dostupnost filmů a seriálů na streamovacích platformách
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-white mb-3">Seznamy a watchlisty</h3>
            <p className="text-gray-300 text-sm">
              Ulož si vše, co tě zajímá, a už nikdy na nic nezapomeň
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-white mb-3">Detailní informace</h3>
            <p className="text-gray-300 text-sm">
              Popisy, herci, žánry, hodnocení
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Statistiky sledování</h3>
            <p className="text-gray-300 text-sm">
              Přehled o tom, co jsi viděl a co tě čeká
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Díky chytrým funkcím si můžeš tvořit vlastní seznamy, hodnotit filmy,
            plánovat, co chceš vidět, a mít tak svůj filmový svět vždy přehledně na jednom místě.
          </p>
          <p className="text-xl text-purple-300 mt-8 font-medium">
            Cinemark ti šetří čas a dělá z filmového zážitku něco víc –
            tvůj osobní filmový deník i průvodce v jednom.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Cinemark. Všechna práva vyhrazena.</p>
          <div className="mt-4">
            <Link
              href="/privacy-policy"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Zásady ochrany soukromí
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
