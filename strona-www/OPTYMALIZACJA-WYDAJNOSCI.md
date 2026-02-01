# Optymalizacja wydajności - fundacjakod.pl

## 🔍 Analiza obecnego stanu

### Problemy zidentyfikowane:

1. **Obrazki:**
   - Logo PNG: **216KB** (1024x1024px) - za duże
   - Logo używane 4 razy na stronie (nav, hero, footer, favicon)
   - Brak lazy loading dla obrazków poniżej folda
   - Brak width/height attributes (CLS - Cumulative Layout Shift)

2. **Skrypty:**
   - Brak `defer` dla main.js (blokuje renderowanie)
   - Service Worker rejestrowany synchronicznie

3. **Fonty:**
   - Google Fonts ładowane synchronicznie
   - Brak `font-display: swap`

4. **HTML/CSS:**
   - HTML: ~29KB (OK)
   - CSS: 911 linii (można zminimalizować)
   - JS: 344 linie (OK)

### Rozmiary plików:
- Logo PNG: **216KB** ⚠️ (powinno być <50KB)
- CSS: ~20KB
- JS: ~16KB
- HTML: ~29KB

## ✅ Optymalizacje wykonane:

1. ✅ Dodano `width` i `height` dla wszystkich obrazków (zapobiega CLS)
2. ✅ Dodano `loading="lazy"` dla obrazków poniżej folda (footer)
3. ✅ Dodano `loading="eager"` dla obrazków powyżej folda (nav, hero)
4. ✅ Dodano `defer` dla main.js (nie blokuje renderowania)
5. ✅ Zoptymalizowano ładowanie fontów Google (async loading)
6. ✅ Dodano `font-display: swap` w CSS

## ⚠️ Do zrobienia (wymaga narzędzi zewnętrznych):

### 1. Optymalizacja logo PNG

**Problem:** Logo 216KB jest za duże dla web.

**Rozwiązanie:**
```bash
# Opcja 1: Użyj online tool (np. TinyPNG, Squoosh)
# https://tinypng.com/
# https://squoosh.app/

# Opcja 2: Zainstaluj narzędzia lokalnie
sudo apt install optipng pngquant

# Kompresja PNG
optipng -o7 assets/images/logo-kod-dla-dzieci.png
# LUB
pngquant --quality=65-80 assets/images/logo-kod-dla-dzieci.png

# Opcja 3: Konwersja do WebP (najlepsza kompresja)
# Użyj Squoosh.app lub cwebp
cwebp -q 80 assets/images/logo-kod-dla-dzieci.png -o assets/images/logo-kod-dla-dzieci.webp
```

**Rekomendowane rozmiary:**
- Nav logo: 150x150px (~10-15KB)
- Hero logo: 512x512px (~30-40KB)
- Footer logo: 120x120px (~8-12KB)
- Favicon: 32x32px lub 64x64px (~2-5KB)

### 2. Utworzenie różnych rozmiarów logo

Utwórz wersje logo w różnych rozmiarach:
- `logo-150x150.png` - dla nav
- `logo-512x512.png` - dla hero
- `logo-120x120.png` - dla footer
- `logo-32x32.png` - dla favicon
- `logo-192x192.png` - dla PWA
- `logo-512x512.webp` - WebP wersja (opcjonalnie)

### 3. Użycie srcset dla responsive images

```html
<img src="assets/images/logo-150x150.png" 
     srcset="assets/images/logo-150x150.png 150w,
             assets/images/logo-512x512.png 512w"
     sizes="(max-width: 768px) 150px, 512px"
     alt="Logo" 
     width="150" 
     height="150" 
     loading="eager">
```

### 4. Minifikacja CSS i JS

```bash
# CSS minifikacja
npm install -g clean-css-cli
cleancss -o assets/css/style.min.css assets/css/style.css

# JS minifikacja
npm install -g terser
terser assets/js/main.js -o assets/js/main.min.js -c -m
```

### 5. Kompresja Gzip/Brotli

Cloudflare automatycznie kompresuje, ale można sprawdzić:
```bash
curl -H "Accept-Encoding: gzip" -I https://fundacjakod.pl/assets/css/style.css
```

## 📊 Testy wydajności

### Narzędzia do testowania:

1. **PageSpeed Insights:**
   - https://pagespeed.web.dev/analysis?url=https://fundacjakod.pl
   - Testuje mobile i desktop
   - Pokazuje Core Web Vitals

2. **Lighthouse (Chrome DevTools):**
   - F12 → Lighthouse → Generate report
   - Performance, Accessibility, Best Practices, SEO

3. **GTmetrix:**
   - https://gtmetrix.com/
   - Szczegółowa analiza wydajności

4. **WebPageTest:**
   - https://www.webpagetest.org/
   - Test z różnych lokalizacji

### Metryki do monitorowania:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms
- **Total Blocking Time**: < 200ms

## 🎯 Priorytety optymalizacji:

### Wysoki priorytet:
1. ⚠️ **Optymalizacja logo** (216KB → <50KB) - największy wpływ
2. ✅ Lazy loading obrazków - wykonane
3. ✅ Defer dla skryptów - wykonane
4. ✅ Width/height attributes - wykonane

### Średni priorytet:
5. Minifikacja CSS/JS
6. Font optimization (font-display: swap) - wykonane
7. Responsive images (srcset)

### Niski priorytet:
8. Preload critical resources
9. Resource hints (dns-prefetch, preconnect)
10. Service Worker caching strategy

## 📝 Checklist optymalizacji:

- [x] Dodano width/height dla obrazków
- [x] Dodano lazy loading
- [x] Dodano defer dla skryptów
- [x] Zoptymalizowano ładowanie fontów
- [ ] **Optymalizacja logo PNG (216KB → <50KB)** ⚠️ WYMAGANE
- [ ] Utworzenie różnych rozmiarów logo
- [ ] Minifikacja CSS
- [ ] Minifikacja JS
- [ ] Test wydajności po optymalizacjach

## 🚀 Następne kroki:

1. **Optymalizuj logo** używając TinyPNG lub Squoosh.app
2. Utwórz różne rozmiary logo dla różnych miejsc użycia
3. Przetestuj wydajność na PageSpeed Insights
4. Porównaj wyniki przed/po optymalizacji
