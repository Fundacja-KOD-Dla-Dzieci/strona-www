# Diagnoza problemu z formularzem kontaktowym

## Problem
Secret `RESEND_API_KEY` został dodany w Cloudflare Dashboard, ale formularz nadal nie działa.

## Przyczyna
**Po dodaniu secretu/environment variable w Cloudflare Pages MUSISZ zrobić redeploy!**

Cloudflare Pages Functions nie widzą nowych secrets bez redeploy.

## Rozwiązanie

### ✅ Wykonane:
1. Redeploy wykonany: https://aac1e598.strona-www.pages.dev
2. Nowy deployment powinien mieć dostęp do `RESEND_API_KEY`

### 🔍 Sprawdź:

1. **Czy secret jest w Production environment?**
   - Cloudflare Dashboard → Pages → strona-www → Settings → Environment Variables
   - Upewnij się, że `RESEND_API_KEY` jest dodany dla **Production** (nie Preview)

2. **Czy nazwa jest poprawna?**
   - Musi być dokładnie: `RESEND_API_KEY` (wielkie litery, podkreślnik)
   - Sprawdź czy nie ma spacji

3. **Czy wartość jest poprawna?**
   - Powinna zaczynać się od `re_`
   - Sprawdź w Resend Dashboard czy klucz jest aktywny

### 🧪 Test:

Po redeploy, przetestuj formularz:
1. Otwórz: https://aac1e598.strona-www.pages.dev
2. Wypełnij formularz kontaktowy
3. Sprawdź console w przeglądarce (F12) - nie powinno być błędów
4. Sprawdź email **kontakt@fundacjakod.pl**

Lub przez curl:
```bash
curl -X POST https://aac1e598.strona-www.pages.dev/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&subject=other&message=Test"
```

### 📊 Sprawdź logi:

1. **Cloudflare Pages Functions Logs:**
   - Cloudflare Dashboard → Pages → strona-www → Functions → Logs
   - Szukaj błędów związanych z `RESEND_API_KEY`

2. **Resend Dashboard:**
   - https://resend.com/emails
   - Sprawdź czy są próby wysyłki i czy są błędy

### ⚠️ Jeśli nadal nie działa:

1. Sprawdź czy `CONTACT_EMAIL` też jest dodany (opcjonalne, ma domyślną wartość)
2. Sprawdź czy funkcja jest dostępna: https://aac1e598.strona-www.pages.dev/api/contact
3. Sprawdź czy nie ma błędów w kodzie funkcji
