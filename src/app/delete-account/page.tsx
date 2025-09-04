import Image from "next/image";
import Link from "next/link";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-black"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Cinemark logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-purple-500/20"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Cinemark
                </h1>
                <p className="text-xs text-gray-400">Smazání účtu</p>
              </div>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-white/20"
            >
              Zpět domů
            </Link>
          </div>
        </div>
      </nav>

      {/* Delete Account Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-red-200 to-pink-200 bg-clip-text text-transparent mb-6">
                Smazání účtu
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Pokud si přejete smazat svůj účet, postupujte podle následujících kroků
              </p>
            </div>

            <div className="space-y-8">
              {/* Contact Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Kontakt pro smazání</h2>
                      <p className="text-gray-400">Pošlete nám e-mail s žádostí</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 mb-6">
                    <p className="text-white mb-3">
                      <strong>E-mail:</strong>
                      <a
                        href="mailto:sebesta.jan@gmail.com?subject=Žádost o smazání účtu - Cinemark&body=Dobrý den,%0A%0AŽádám o smazání mého účtu v aplikaci Cinemark.%0A%0AUživatelské jméno: [VYPLŇTE]%0A%0ADěkuji"
                        className="text-blue-300 hover:text-blue-200 underline ml-2 transition-colors duration-300"
                      >
                        sebesta.jan@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      Kliknutím se otevře váš e-mailový klient s předvyplněnou zprávou
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Co smazat:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Uživatelské jméno
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Heslo (šifrované)
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Všechna data účtu
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Doba zpracování:</h3>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <p className="text-green-300 font-semibold">Do 48 hodin</p>
                        <p className="text-gray-300 text-sm mt-1">Okamžité a nevratné smazání</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-red-500/10 border border-red-500/20 rounded-3xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Důležité upozornění</h3>
                  </div>
                  <p className="text-red-100 text-lg leading-relaxed">
                    <strong>Smazání je nevratné!</strong> Po smazání účtu nebude možné obnovit
                    vaše data ani přístup k účtu. Ujistěte se, že si opravdu přejete účet smazat.
                  </p>
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
                href="/"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Hlavní stránka
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Zásady ochrany soukromí
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
