# Strona internetowa - Fundacja Kod dla Dzieci

Responsywna strona internetowa fundacji zbudowana z myślą o dostępności i nowoczesnym designie.

**🌐 URL**: https://fundacjakod.pl  
**🚀 Deploy**: Cloudflare Pages

## Struktura projektu

```
strona-www/
├── index.html              # Główna strona
├── assets/
│   ├── css/
│   │   └── style.css      # Style CSS
│   ├── js/
│   │   └── main.js        # JavaScript
│   └── images/            # Obrazy i logo
├── functions/
│   └── api/
│       └── contact.ts     # Cloudflare Pages Function dla formularza kontaktowego
├── package.json           # Zależności Node.js
├── wrangler.toml         # Konfiguracja Cloudflare Pages
└── README.md             # Ten plik
```

## Funkcjonalności

- ✅ Responsywny design (mobile-first)
- ✅ Dostępność (WCAG 2.1 AA)
- ✅ Formularz kontaktowy z wysyłką emaili (Resend API)
- ✅ Optymalizacja wydajności
- ✅ SEO-friendly

## Technologie

- **HTML5** - Semantyczny HTML
- **CSS3** - Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)** - Vanilla JS, async/await
- **TypeScript** - Cloudflare Pages Functions
- **Cloudflare Pages** - Hosting i serverless functions

## Instalacja i uruchomienie lokalnie

```bash
# Sklonuj repozytorium
git clone https://github.com/Fundacja-KOD-Dla-Dzieci/strona-www.git
cd strona-www

# Zainstaluj zależności
npm install

# Uruchom lokalny serwer
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:8788

## Deployment

Strona jest automatycznie deployowana na Cloudflare Pages przy każdym pushu do brancha `main`.

### Konfiguracja environment variables

W Cloudflare Dashboard → Pages → strona-www → Settings → Environment Variables:

- `RESEND_API_KEY` - Klucz API z Resend (dla formularza kontaktowego)
- `CONTACT_EMAIL` - Email docelowy (domyślnie: kontakt@fundacjakod.pl)

## Formularz kontaktowy

Formularz kontaktowy używa Cloudflare Pages Functions i Resend API do wysyłki emaili.

Szczegóły konfiguracji: [KONFIGURACJA-RESEND.md](./KONFIGURACJA-RESEND.md)

## Licencja

MIT License

## Kontakt

- **Email**: kontakt@fundacjakod.pl
- **Strona**: https://fundacjakod.pl
