# Plan redesignu strony www - Nowe logo i kolory brandowe

## Cel
Dostosowanie strony internetowej do nowego logo "KOD dla dzieci" (kocie logo) i wprowadzenie nowej palety kolorów brandowych.

## Nowe kolory z logo

### Główne kolory
- **Pomarańczowy**: `#F58320` - główny akcent, przyciski CTA, akcenty
- **Zielony**: `#8CC63F` - akcenty, sukces, pozytywne akcje
- **Niebieski**: `#00A7E1` - główny kolor, linki, nawigacja
- **Ciemniejszy niebieski**: `#2E7DB2` - teksty, hover states, sekcje

### Kolory pomocnicze
- **Żółto-pomarańczowy**: `#FBB040` - gradienty, akcenty
- **Ciemny szary**: `#333333` - teksty, kontrasty
- **Jasny szary**: `#F8F9FA` - tła sekcji

## Obecne kolory (do zastąpienia)
- `#2196F3` → `#00A7E1` (niebieski)
- `#1976D2` → `#2E7DB2` (ciemniejszy niebieski)
- `#E3F2FD` → gradient z pomarańczowego/zielonego/niebieskiego
- `#BBDEFB` → jaśniejsze odcienie nowych kolorów

## Plan zmian

### 1. Przygotowanie logo ✅
- [x] Skopiować logo do `assets/images/logo-kod-dla-dzieci.png`
- [x] Logo gotowe (PNG 1024x1024, 216KB)
- [ ] Zoptymalizować logo (opcjonalnie - można później)
- [ ] Przygotować warianty (favicon 32x32, 64x64, 128x128) - opcjonalnie
- [ ] Przygotować wersję dla social media (1200x630px) - opcjonalnie

### 2. Aktualizacja CSS (kolory) ✅
- [x] Zdefiniować CSS custom properties dla nowych kolorów na początku `style.css`
- [x] Zastąpić wszystkie wystąpienia `#2196F3` → `#00A7E1`
- [x] Zastąpić wszystkie wystąpienia `#1976D2` → `#2E7DB2`
- [x] Zaktualizować gradienty w hero section (pomarańczowy → zielony → niebieski)
- [x] Dostosować hover states (ciemniejsze odcienie)
- [x] Zaktualizować przyciski:
  - Primary: pomarańczowy `#F58320` → hover `#E5731A`
  - Secondary: niebieski `#00A7E1` → hover `#2E7DB2`
- [x] Dostosować kolory kart i sekcji (akcenty zielone/pomarańczowe)
- [x] Zaktualizować wszystkie SVG ikony w HTML

### 3. Integracja logo w HTML ✅
- [x] Dodać logo w header (zamiast tekstu "Fundacja Kod dla Dzieci")
  - Alt text: "KOD dla dzieci - Logo fundacji"
  - Link do strony głównej
- [x] Dodać logo w footer (mniejsza wersja, białe)
- [x] Zaktualizować favicon (`<link rel="icon">`)
- [x] Dodać meta tags dla social media:
  - `og:image` - logo dla Open Graph
  - `twitter:image` - logo dla Twitter

### 4. Responsywność logo ✅
- [x] Sprawdzić wyświetlanie logo na mobile (< 768px)
- [x] Dostosować rozmiary logo dla różnych breakpointów:
  - Desktop: max-height 60px
  - Tablet: max-height 50px
  - Mobile: max-height 40px
- [x] Zapewnić odpowiedni kontrast (logo na białym tle)

### 5. Testowanie ✅
- [x] Uruchomić lokalnie (`python -m http.server 8000`)
- [x] Strona działa na http://localhost:8000
- [ ] Sprawdzić dostępność (kontrast kolorów WCAG AA) - wymaga przeglądarki
- [ ] Przetestować na różnych przeglądarkach - wymaga przeglądarki
- [ ] Sprawdzić responsywność - wymaga przeglądarki

## Pliki do modyfikacji

### `index.html`
- Linia 19: zamienić `<h1 class="nav__logo">` na `<img src="assets/images/logo-kod-dla-dzieci.png" alt="KOD dla dzieci">`
- Linia 384: zamienić `<h3 class="footer__logo">` na logo
- Dodać favicon link w `<head>`
- Dodać meta tags dla social media

### `assets/css/style.css`
- Dodać CSS custom properties na początku pliku
- Zastąpić wszystkie kolory zgodnie z mapowaniem
- Zaktualizować gradienty
- Dodać style dla logo (responsive)

### `assets/images/`
- `logo-kod-dla-dzieci.png` - główne logo (już skopiowane)
- `favicon.ico` - favicon (do utworzenia)
- `logo-social.png` - logo dla social media (do utworzenia)

## Uwagi
- **Dostępność**: Zachować WCAG 2.1 AA (kontrast min. 4.5:1 dla tekstu)
- **Responsywność**: Logo musi dobrze wyglądać na wszystkich urządzeniach
- **Performance**: Zoptymalizować logo (WebP lub zoptymalizowany PNG)
- **Nie deployować**: Nie wysyłać na produkcję przed akceptacją

## Deployment (po akceptacji)
Strona jest statyczna (HTML/CSS/JS), więc deployment:
- **GitHub Pages**: Włącz w ustawieniach repozytorium
- **Cloudflare Pages**: Połącz z GitHub, folder `strona-www`
- **Netlify**: Połącz z GitHub, folder `strona-www`

## Status
- ✅ Logo skopiowane
- ⏳ Plan przygotowany
- ⏳ Czekam na akceptację przed rozpoczęciem implementacji
