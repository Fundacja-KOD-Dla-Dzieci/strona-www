# Cloudflare Pages Deployment

## Opcja 1: Przez GitHub (Zalecana)

### 1. Utwórz repozytorium na GitHub
```bash
# W GitHub utwórz nowe repozytorium: fundacja-kod-dla-dzieci
# Następnie dodaj remote:
git remote add origin https://github.com/[username]/fundacja-kod-dla-dzieci.git
git push -u origin main
```

### 2. Połącz z Cloudflare Pages
1. Przejdź na: https://dash.cloudflare.com/pages
2. Kliknij **"Create a project"**
3. Wybierz **"Connect to Git"**
4. Połącz z GitHub i wybierz repozytorium `fundacja-kod-dla-dzieci`
5. Ustaw konfigurację:
   - **Framework preset**: None (Static Site)
   - **Build command**: (puste)
   - **Build output directory**: `strona-www`
   - **Root directory**: `/` (lub zostaw puste)

### 3. Deployment
- Cloudflare automatycznie zbuduje i wdroży stronę
- URL będzie: `https://fundacja-kod-dla-dzieci.pages.dev`

## Opcja 2: Przez Wrangler CLI

### 1. Ustaw API Token
```bash
export CLOUDFLARE_API_TOKEN='your_token_here'
```

### 2. Utwórz projekt
```bash
wrangler pages project create fundacja-kod-dla-dzieci
```

### 3. Wdróż stronę
```bash
cd strona-www
wrangler pages deploy . --project-name=fundacja-kod-dla-dzieci
```

## Opcja 3: Przez Cloudflare Dashboard

### 1. Upload bezpośredni
1. Przejdź na: https://dash.cloudflare.com/pages
2. Kliknij **"Upload assets"**
3. Wybierz folder `strona-www`
4. Wgraj pliki

## Konfiguracja domeny

### 1. Domena niestandardowa
1. W Cloudflare Pages wybierz projekt
2. Przejdź do **"Custom domains"**
3. Dodaj domenę: `fundacjakod.pl`
4. Skonfiguruj DNS w Cloudflare

### 2. Subdomena
- `fundacja-kod-dla-dzieci.pages.dev` (domyślna)
- `www.fundacjakod.pl` (niestandardowa)

## Funkcje Cloudflare Pages

### 1. Automatyczne deploymenty
- Każdy push do `main` = nowy deployment
- Preview deployments dla PR
- Rollback do poprzednich wersji

### 2. Performance
- Globalna sieć CDN
- Automatyczna optymalizacja obrazów
- Kompresja gzip/brotli

### 3. Bezpieczeństwo
- HTTPS automatycznie
- DDoS protection
- WAF (Web Application Firewall)

## Monitoring

### 1. Analytics
- Cloudflare Analytics
- Google Analytics (dodaj do HTML)
- Core Web Vitals

### 2. Logs
- Access logs
- Error logs
- Performance metrics

## Backup

### 1. Kod źródłowy
- GitHub (główny backup)
- Lokalne kopie

### 2. Deployment
- Cloudflare automatycznie przechowuje wersje
- Możliwość rollback

---

## ✅ **Status deploymentu:**

### **Strona internetowa:**
- **URL:** https://fundacja-kod-dla-dzieci.pages.dev
- **Status:** ✅ DZIAŁA (HTTP 200 OK)
- **Deployment:** ✅ Wykonany przez wrangler pages deploy
- **CDN:** ✅ Cloudflare (globalna sieć)
- **HTTPS:** ✅ Automatycznie włączony

### **Dokumenty:**
- **Google Drive:** ✅ Skopiowane ręcznie
- **Synchronizacja:** ⏳ Do skonfigurowania (rclone)
- **Dostęp:** ✅ Online przez Google Drive

### **Następne kroki:**
- [ ] Konfiguracja automatycznej synchronizacji (rclone)
- [ ] Dodanie domeny niestandardowej (fundacjakod.pl)
- [ ] Integracja z GitHub dla automatycznych deploymentów

---

**Zalecam Opcję 1 (GitHub) - najłatwiejsza i najbardziej profesjonalna!**
