# Strona internetowa - Fundacja Kod dla Dzieci

Responsywna strona internetowa fundacji zbudowana z myślą o dostępności i nowoczesnym designie.

**🌐 Repozytorium**: https://github.com/Fundacja-KOD-Dla-Dzieci/strona-www  
**🚀 Deploy**: https://strona-www.pages.dev (Cloudflare Pages)

## Struktura plików

```
strona-www/
├── index.html              # Główna strona
├── assets/
│   ├── css/
│   │   └── style.css      # Style CSS
│   ├── js/
│   │   └── main.js        # JavaScript
│   └── images/            # Obrazy (do dodania)
├── docs/                  # Dokumentacja publiczna
└── README.md             # Ten plik
```

## Funkcjonalności

### 1. Responsywność
- **Mobile-first**: Projektowanie z myślą o urządzeniach mobilnych
- **Breakpoints**: 480px, 768px, 1024px, 1200px
- **Flexible grid**: Elastyczny układ siatki

### 2. Dostępność (WCAG 2.1 AA)
- **Semantyczny HTML**: Prawidłowa struktura dokumentu
- **ARIA labels**: Etykiety dla screen readerów
- **Keyboard navigation**: Nawigacja klawiaturą
- **Color contrast**: Odpowiedni kontrast kolorów
- **Focus management**: Zarządzanie fokusem

### 3. Performance
- **Optimized images**: Zoptymalizowane obrazy
- **Minified CSS/JS**: Zminimalizowane pliki
- **Lazy loading**: Opóźnione ładowanie
- **CDN ready**: Gotowe do użycia z CDN

### 4. SEO
- **Meta tags**: Kompletne meta tagi
- **Structured data**: Dane strukturalne
- **Sitemap**: Mapa strony
- **Robots.txt**: Instrukcje dla robotów

## Sekcje strony

### 1. Header
- **Logo**: Nazwa fundacji
- **Navigation**: Menu nawigacyjne
- **Mobile menu**: Menu mobilne

### 2. Hero
- **Główny tytuł**: Misja fundacji
- **Opis**: Krótki opis działalności
- **CTA buttons**: Przyciski akcji

### 3. Misja
- **Karty**: Trzy główne wartości
- **Ikony**: Wizualne przedstawienie
- **Opisy**: Szczegółowe wyjaśnienia

### 4. Projekty
- **Grid**: Układ projektów
- **Karty**: Informacje o projektach
- **Linki**: Odnośniki do GitHub i demo

### 5. Zespół
- **Profil**: Informacje o członkach zespołu
- **Role**: Funkcje w fundacji
- **Opisy**: Krótkie biografie

### 6. Wspieraj
- **Sposoby**: Różne formy wsparcia
- **Ikony**: Wizualne przedstawienie
- **Linki**: Odnośniki do kontaktu

### 7. Kontakt
- **Informacje**: Dane kontaktowe
- **Formularz**: Formularz kontaktowy
- **Mapa**: Lokalizacja (opcjonalnie)

### 8. Footer
- **Linki**: Odnośniki do sekcji
- **Social media**: Linki do mediów społecznościowych
- **Copyright**: Informacje prawne

## Technologie

### 1. HTML5
- **Semantyczne elementy**: header, nav, main, section, article, footer
- **Formularze**: Walidacja po stronie klienta
- **Accessibility**: ARIA attributes

### 2. CSS3
- **Flexbox**: Elastyczny układ
- **Grid**: Siatka CSS
- **Custom properties**: Zmienne CSS
- **Media queries**: Responsywność

### 3. JavaScript (ES6+)
- **Modules**: Modułowa struktura
- **Async/await**: Asynchroniczne operacje
- **Event handling**: Obsługa zdarzeń
- **Accessibility**: Ulepszenia dostępności

## Instalacja i uruchomienie

### 1. Lokalne uruchomienie
```bash
# Sklonuj repozytorium
git clone https://github.com/fundacjakod/fundacja-kod-dla-dzieci.git

# Przejdź do katalogu strony
cd fundacja-kod-dla-dzieci/strona-www

# Otwórz w przeglądarce
open index.html
```

### 2. Serwer lokalny
```bash
# Użyj Python
python -m http.server 8000

# Użyj Node.js
npx http-server

# Użyj PHP
php -S localhost:8000
```

### 3. Deployment

#### GitHub Pages
```bash
# Włącz GitHub Pages w ustawieniach repozytorium
# Wybierz branch: main
# Folder: /strona-www
```

#### Netlify
```bash
# Połącz z GitHub
# Ustaw build command: brak
# Ustaw publish directory: strona-www
```

#### Vercel
```bash
# Połącz z GitHub
# Ustaw root directory: strona-www
# Ustaw build command: brak
```

## Konfiguracja

### 1. Dane kontaktowe
Edytuj plik `index.html` i zaktualizuj:
- **Email**: kontakt@fundacjakod.pl
- **Telefon**: [NUMER TELEFONU]
- **Adres**: [ADRES SIEDZIBY]

### 2. Social media
Dodaj linki do mediów społecznościowych:
- **GitHub**: github.com/fundacjakod
- **LinkedIn**: linkedin.com/company/fundacjakod
- **Facebook**: facebook.com/fundacjakod

### 3. Analytics
Dodaj kod śledzenia:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Testowanie

### 1. Dostępność
```bash
# Uruchom axe-core
npm install -g @axe-core/cli
axe https://fundacjakod.pl

# Uruchom Lighthouse
npm install -g lighthouse
lighthouse https://fundacjakod.pl --view
```

### 2. Performance
```bash
# Uruchom PageSpeed Insights
# https://pagespeed.web.dev/

# Uruchom GTmetrix
# https://gtmetrix.com/
```

### 3. Cross-browser
- **Chrome**: Najnowsza wersja
- **Firefox**: Najnowsza wersja
- **Safari**: Najnowsza wersja
- **Edge**: Najnowsza wersja

## Utrzymanie

### 1. Regularne aktualizacje
- **Treść**: Aktualizacja informacji o projektach
- **Zespół**: Dodawanie nowych członków
- **Wydarzenia**: Informacje o nowych wydarzeniach

### 2. Monitoring
- **Uptime**: Monitorowanie dostępności
- **Performance**: Śledzenie wydajności
- **Errors**: Monitorowanie błędów

### 3. Backup
- **Git**: Wersjonowanie w Git
- **Cloud**: Kopie zapasowe w chmurze
- **Local**: Lokalne kopie zapasowe

## Kontakt

W przypadku pytań dotyczących strony internetowej:
- **Email**: tech@fundacjakod.pl
- **GitHub**: [github.com/fundacjakod](https://github.com/fundacjakod)
- **Discord**: Kanał #website
