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
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Hlavní stránka
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
                Naše aplikace shromažďuje pouze následující údaje:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uživatelské jméno - pro identifikaci vašeho účtu</li>
                <li>Heslo - pro zabezpečení přístupu k vašemu účtu (uloženo v šifrované podobě)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Neshromažďujeme žádné další osobní údaje, e-mailové adresy,
                telefonní čísla ani jiné identifikační informace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Použití údajů</h2>
              <p className="leading-relaxed mb-3">
                Shromážděné údaje používáme výhradně k:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ověření vaší identity při přihlášení do aplikace</li>
                <li>Zabezpečení vašeho účtu</li>
                <li>Poskytování základních funkcí aplikace</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Vaše údaje nepoužíváme pro marketing, analýzy ani jiné účely
                než pro základní fungování aplikace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Sdílení údajů</h2>
              <p className="leading-relaxed">
                Vaše údaje (uživatelské jméno a heslo) nesdílíme s žádnými třetími stranami.
              </p>
              <p className="leading-relaxed mt-4">
                Výjimkou jsou pouze případy, kdy je to vyžadováno zákonem nebo
                soudním příkazem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Zabezpečení údajů</h2>
              <p className="leading-relaxed">
                Vaše heslo je uloženo v šifrované podobě a není přístupné ani vývojářům aplikace.
                Implementujeme standardní bezpečnostní opatření k ochraně vašich přihlašovacích údajů.
              </p>
              <p className="leading-relaxed mt-4">
                Doporučujeme používat silné heslo a nesdílet své přihlašovací údaje s nikým jiným.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Vaše práva</h2>
              <p className="leading-relaxed mb-3">
                Máte právo na:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Změnu vašeho uživatelského jména</li>
                <li>Změnu vašeho hesla</li>
                <li>Smazání vašeho účtu a všech souvisejících údajů</li>
                <li>Informace o tom, jaké údaje o vás uchováváme</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Pro uplatnění těchto práv nás kontaktujte na e-mail sebesta.jan@gmail.com nebo
                použijte naši <Link href="/delete-account" className="text-purple-400 hover:text-purple-300 underline">stránku pro smazání účtu</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies a sledovací technologie</h2>
              <p className="leading-relaxed">
                Naše aplikace nepoužívá cookies ani žádné sledovací technologie.
                Nesledujeme vaše chování ani nesbíráme analytická data.
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
                kontaktujte nás na: sebesta.jan@gmail.com
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
