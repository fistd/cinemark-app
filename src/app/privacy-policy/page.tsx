import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Zásady ochrany soukromí
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-gray-300 space-y-6">
            <p className="text-sm text-gray-400">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Úvod</h2>
              <p className="leading-relaxed">
                Tyto zásady ochrany soukromí popisují, jak aplikace Cinemark (&quot;my&quot;, &quot;naše aplikace&quot;)
                shromažďuje, používá a chrání vaše osobní údaje při používání naší mobilní aplikace 
                a souvisejících služeb.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Shromažďované údaje</h2>
              <p className="leading-relaxed mb-3">
                Naše aplikace může shromažďovat následující typy údajů:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Údaje o účtu: uživatelské jméno, e-mailová adresa</li>
                <li>Údaje o preferencích: oblíbené filmy, žánry, hodnocení</li>
                <li>Údaje o používání: statistiky sledování, watchlisty</li>
                <li>Technické údaje: typ zařízení, verze operačního systému</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Použití údajů</h2>
              <p className="leading-relaxed mb-3">
                Shromážděné údaje používáme k:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Poskytování a zlepšování našich služeb</li>
                <li>Personalizaci obsahu a doporučení</li>
                <li>Komunikaci s uživateli</li>
                <li>Analýze používání aplikace</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Sdílení údajů</h2>
              <p className="leading-relaxed">
                Vaše osobní údaje nesdílíme s třetími stranami, kromě případů kdy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Je to nezbytné pro poskytování služeb (např. streamovací platformy)</li>
                <li>Máme váš výslovný souhlas</li>
                <li>Je to vyžadováno zákonem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Zabezpečení údajů</h2>
              <p className="leading-relaxed">
                Implementujeme vhodná technická a organizační opatření k ochraně vašich 
                osobních údajů před neoprávněným přístupem, změnou, zveřejněním nebo zničením.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Vaše práva</h2>
              <p className="leading-relaxed mb-3">
                Máte právo na:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Přístup k vašim osobním údajům</li>
                <li>Opravu nesprávných údajů</li>
                <li>Výmaz vašich údajů</li>
                <li>Omezení zpracování</li>
                <li>Přenositelnost údajů</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies a sledovací technologie</h2>
              <p className="leading-relaxed">
                Naše aplikace může používat cookies a podobné technologie k zlepšení 
                uživatelského zážitku a analýze používání aplikace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Změny zásad</h2>
              <p className="leading-relaxed">
                Tyto zásady můžeme čas od času aktualizovat. O významných změnách vás 
                budeme informovat prostřednictvím aplikace nebo e-mailem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Kontakt</h2>
              <p className="leading-relaxed">
                Pokud máte jakékoli otázky ohledně těchto zásad ochrany soukromí, 
                kontaktujte nás na: privacy@cinemark.app
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Cinemark. Všechna práva vyhrazena.</p>
          <div className="mt-4">
            <Link 
              href="/" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
