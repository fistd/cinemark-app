import Image from "next/image";
import Link from "next/link";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Cinemark logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-white">Cinemark</span>
          </Link>
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Zpět na hlavní stránku
          </Link>
        </div>
      </nav>

      {/* Delete Account Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Smazání účtu
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Jak požádat o smazání účtu</h2>
              <p className="leading-relaxed mb-4">
                Pokud si přejete smazat svůj účet v aplikaci Cinemark a všechna související data, 
                postupujte podle následujících kroků:
              </p>
              
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Kontaktní údaje</h3>
                <p className="text-blue-100 mb-2">
                  <strong>E-mail:</strong> 
                  <a 
                    href="mailto:sebesta.jan@gmail.com?subject=Žádost o smazání účtu - Cinemark&body=Dobrý den,%0A%0AŽádám o smazání mého účtu v aplikaci Cinemark.%0A%0AUživatelské jméno: [VYPLŇTE]%0A%0ADěkuji"
                    className="text-blue-300 hover:text-blue-200 underline ml-2"
                  >
                    sebesta.jan@gmail.com
                  </a>
                </p>
                <p className="text-blue-100 text-sm">
                  Kliknutím na e-mail se otevře váš e-mailový klient s předvyplněnou zprávou.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Postup žádosti:</h3>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li className="leading-relaxed">
                    <strong>Odešlete e-mail</strong> na adresu sebesta.jan@gmail.com
                  </li>
                  <li className="leading-relaxed">
                    <strong>Předmět e-mailu:</strong> &quot;Žádost o smazání účtu - Cinemark&quot;
                  </li>
                  <li className="leading-relaxed">
                    <strong>V e-mailu uveďte:</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Vaše uživatelské jméno v aplikaci</li>
                      <li>Potvrzení, že si přejete smazat účet</li>
                    </ul>
                  </li>
                  <li className="leading-relaxed">
                    <strong>Čekejte na potvrzení</strong> - odpovíme do 48 hodin
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Jaká data budou smazána</h2>
              <p className="leading-relaxed mb-3">
                Po zpracování vaší žádosti budou <strong>trvale smazána</strong> následující data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vaše uživatelské jméno</li>
                <li>Vaše heslo (již nyní uloženo v šifrované podobě)</li>
                <li>Všechny údaje spojené s vaším účtem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Doba zpracování</h2>
              <p className="leading-relaxed">
                <strong>Okamžité smazání:</strong> Váš účet a všechna data budou smazána okamžitě 
                po zpracování vaší žádosti, nejpozději do 48 hodin od obdržení e-mailu.
              </p>
              <p className="leading-relaxed mt-4">
                <strong>Žádná archivace:</strong> Neuchováváme žádné zálohy ani kopie vašich dat 
                po smazání účtu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Důležité upozornění</h2>
              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-100 leading-relaxed">
                  <strong>Smazání je nevratné!</strong> Po smazání účtu nebude možné obnovit 
                  vaše data ani přístup k účtu. Ujistěte se, že si opravdu přejete účet smazat.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Alternativy</h2>
              <p className="leading-relaxed">
                Pokud máte problémy s aplikací nebo chcete pouze změnit své údaje, 
                kontaktujte nás na stejné e-mailové adrese. Možná dokážeme vyřešit 
                váš problém bez nutnosti mazání účtu.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Cinemark. Všechna práva vyhrazena.</p>
          <div className="mt-4 space-x-6">
            <Link 
              href="/" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Hlavní stránka
            </Link>
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
