# Konfiguracja formularza kontaktowego z Resend API

## ✅ Co zostało przygotowane:

1. **Cloudflare Pages Function**: `functions/api/contact.ts` - gotowa funkcja z Resend API
2. **Zaktualizowany JavaScript**: obsługa async/await z wysyłką
3. **Zaktualizowany HTML**: formularz z `action="/api/contact"`
4. **Email HTML**: ładny szablon emaila z kolorami brandowymi

## 🔧 Konfiguracja w Cloudflare Pages

### Krok 1: Dodaj Environment Variables

1. Przejdź do **Cloudflare Dashboard** → **Pages** → Twój projekt `strona-www`
2. Przejdź do **Settings** → **Environment Variables**
3. Dodaj następujące zmienne:

#### Production Environment:
- **Variable name**: `RESEND_API_KEY`
- **Value**: `[Twój klucz API z Resend - uzyskaj z https://resend.com/api-keys]`

- **Variable name**: `CONTACT_EMAIL`
- **Value**: `kontakt@fundacjakod.pl`

#### Preview Environment (opcjonalnie, dla testów):
- Te same zmienne jak wyżej

### Krok 2: Weryfikacja domeny w Resend ✅

**Status: ZWERYFIKOWANE** ✅

Domena `fundacjakod.pl` została zweryfikowana w Resend. Formularz używa:
- **From**: `noreply@fundacjakod.pl`
- **To**: `kontakt@fundacjakod.pl`

**Instrukcja weryfikacji** (dla przyszłych zmian):
Zobacz: `RESEND-DOMAIN-VERIFICATION.md`

### Krok 3: Deploy na Cloudflare Pages

#### Opcja A: Przez GitHub (automatyczny)
1. Wrzuć zmiany do repozytorium GitHub
2. Cloudflare Pages automatycznie zbuduje i wdroży
3. Funkcje będą dostępne pod `/api/contact`

#### Opcja B: Przez Wrangler CLI (manualny)
```bash
cd fundacja-kod-dla-dzieci/strona-www
npm install
npm run deploy
```

### Krok 4: Testowanie

1. Otwórz stronę na Cloudflare Pages
2. Wypełnij formularz kontaktowy
3. Sprawdź email **kontakt@fundacjakod.pl**
4. Sprawdź console w przeglądarce (F12) - nie powinno być błędów
5. Sprawdź Resend Dashboard → Emails (historia wysyłek)

## 📧 Format emaila

Email będzie zawierał:
- **Od**: Fundacja Kod dla Dzieci <noreply@fundacjakod.pl> ✅
- **Do**: kontakt@fundacjakod.pl ✅
- **Reply-To**: email osoby wypełniającej formularz (możesz odpowiedzieć bezpośrednio!)
- **Temat**: [Formularz kontaktowy] [Temat] - [Imię i nazwisko]
- **Treść**: HTML z formatowaniem (kolory brandowe) + tekstowa wersja

## 🔒 Bezpieczeństwo

- ✅ API key jest przechowywany w Cloudflare Environment Variables (bezpieczne)
- ✅ Walidacja danych po stronie serwera
- ✅ Spam protection przez Resend
- ✅ Rate limiting przez Cloudflare

## 🐛 Troubleshooting

### Email nie przychodzi:
1. Sprawdź spam folder
2. Sprawdź Cloudflare Pages → Functions → Logs
3. Sprawdź Resend Dashboard → Emails (historia wysyłek)
4. Sprawdź czy `RESEND_API_KEY` jest poprawnie ustawiony w Cloudflare

### Błąd 500:
1. Sprawdź czy `RESEND_API_KEY` jest poprawnie ustawiony
2. Sprawdź czy `CONTACT_EMAIL` jest poprawny
3. Sprawdź Cloudflare Pages → Functions → Logs
4. Sprawdź Resend Dashboard → API Keys (czy klucz jest aktywny)

### Formularz nie wysyła:
1. Sprawdź console w przeglądarce (F12)
2. Sprawdź Network tab - czy request do `/api/contact` jest wysyłany
3. Sprawdź czy JavaScript nie blokuje wysyłki
4. Sprawdź czy formularz ma `action="/api/contact"` i `method="POST"`

## 📊 Limity Resend (darmowy plan)

- **3000 emaili/miesiąc** (wystarczy dla startu)
- **100 emaili/dzień**
- Weryfikacja domeny opcjonalna (można użyć domeny testowej)

## ✅ Checklist przed deployem

- [ ] API key dodany do Cloudflare Environment Variables (NIE commituj klucza do repo!)
- [ ] API key dodany do Cloudflare Environment Variables
- [ ] CONTACT_EMAIL ustawiony na kontakt@fundacjakod.pl
- [x] Funkcja `functions/api/contact.ts` jest w repozytorium
- [x] HTML formularza ma `action="/api/contact"`
- [x] JavaScript obsługuje async/await
- [ ] Deploy na Cloudflare Pages wykonany

## 🚀 Gotowe!

Po skonfigurowaniu environment variables i deploy, formularz będzie automatycznie wysyłał emaile na **kontakt@fundacjakod.pl**.

**Uwaga**: Obecnie używa domeny testowej Resend (`onboarding@resend.dev`). Po weryfikacji domeny `fundacjakod.pl` w Resend możesz zmienić `from` na `noreply@fundacjakod.pl`.
