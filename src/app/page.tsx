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
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Zásady ochrany soukromí
            </Link>
            <Link
              href="/delete-account"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Smazání účtu
            </Link>
          </div>
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
            tvůj filmový průvodce
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
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Kde sledovat</h3>
            <p className="text-gray-300 text-sm">
              Zjisti dostupnost filmů a seriálů na streamovacích platformách
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Seznamy a watchlisty</h3>
            <p className="text-gray-300 text-sm">
              Ulož si vše, co tě zajímá, a už nikdy na nic nezapomeň
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM9 6v11a1 1 0 102 0V6a1 1 0 10-2 0zm4 0v11a1 1 0 102 0V6a1 1 0 10-2 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Detailní informace</h3>
            <p className="text-gray-300 text-sm">
              Popisy, herci, žánry, hodnocení
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
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
          <div className="mt-4 space-x-6">
            <Link
              href="/privacy-policy"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Zásady ochrany soukromí
            </Link>
            <Link
              href="/delete-account"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Smazání účtu
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
