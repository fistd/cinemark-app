import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Cinemark logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Cinemark
                </h1>
                <p className="text-xs text-gray-400">Filmový průvodce</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                Ochrana soukromí
              </Link>
              <Link
                href="/delete-account"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-white/20"
              >
                Smazání účtu
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-24">
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/logo.png"
                alt="Cinemark logo"
                width={160}
                height={160}
                className="relative rounded-3xl shadow-2xl border border-white/20"
              />
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                Cinemark
              </h1>

              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                  Tvůj filmový průvodce
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                Moderní aplikace pro filmové nadšence. Okamžitě zjisti, kde sledovat své oblíbené filmy a seriály.
                Žádné zdlouhavé hledání – vše na jednom místě.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Kde sledovat",
                description: "Zjisti dostupnost na všech streamovacích platformách",
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: "Watchlisty",
                description: "Vytvárej seznamy a nikdy nezapomeň na žádný film",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Detaily",
                description: "Kompletní informace o filmech a seriálech",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Statistiky",
                description: "Sleduj svůj pokrok a objevuj nové obsahy",
                gradient: "from-blue-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                     style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Připraven na lepší filmový zážitek?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Cinemark ti šetří čas a dělá z filmového zážitku něco víc –
                  tvůj osobní filmový deník i průvodce v jednom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                    Stáhnout aplikaci
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300">
                    Zjistit více
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Image
                src="/logo.png"
                alt="Cinemark logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Cinemark
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Zásady ochrany soukromí
              </Link>
              <Link
                href="/delete-account"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Smazání účtu
              </Link>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm">
                &copy; 2024 Cinemark. Všechna práva vyhrazena.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
