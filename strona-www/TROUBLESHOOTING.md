# Troubleshooting - Formularz kontaktowy nie działa

## Problem: Secret dodany, ale formularz nadal nie działa

### Diagnoza

Jeśli dodałeś `RESEND_API_KEY` jako secret w Cloudflare Pages, ale formularz nadal zwraca błąd:
```
{"error":"Brak konfiguracji email service. Skonfiguruj RESEND_API_KEY w Cloudflare Pages."}
```

### Rozwiązanie

**Po dodaniu secretu MUSISZ zrobić redeploy!**

Cloudflare Pages Functions nie widzą nowych secrets/environment variables bez redeploy.

#### Opcja 1: Redeploy przez Wrangler CLI
```bash
cd fundacja-kod-dla-dzieci/strona-www
npm run deploy
```

#### Opcja 2: Redeploy przez Cloudflare Dashboard
1. Przejdź do: Cloudflare Dashboard → Pages → strona-www
2. Kliknij "Create deployment"
3. Wybierz branch `main` (lub najnowszy commit)
4. Kliknij "Deploy"

#### Opcja 3: Trigger redeploy przez push do GitHub
Jeśli masz połączone GitHub z Cloudflare Pages:
```bash
git commit --allow-empty -m "trigger: redeploy after adding secrets"
git push
```

### Sprawdzenie

Po redeploy, przetestuj:
```bash
curl -X POST https://strona-www.pages.dev/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&subject=other&message=Test"
```

Powinno zwrócić:
```json
{"success":true,"message":"Wiadomość została wysłana. Dziękujemy!"}
```

### Inne możliwe problemy

1. **Secret dodany do Preview zamiast Production**
   - Sprawdź w Cloudflare Dashboard → Pages → strona-www → Settings → Environment Variables
   - Upewnij się, że secret jest dodany dla **Production** environment

2. **Nieprawidłowa nazwa secretu**
   - Musi być dokładnie: `RESEND_API_KEY` (wielkie litery, podkreślnik)
   - Sprawdź czy nie ma spacji na początku/końcu

3. **Nieprawidłowa wartość API key**
   - Sprawdź czy API key zaczyna się od `re_`
   - Sprawdź w Resend Dashboard czy klucz jest aktywny

4. **Funkcja nie jest wdrożona**
   - Sprawdź czy plik `functions/api/contact.ts` istnieje w repozytorium
   - Sprawdź czy funkcja jest dostępna pod `/api/contact`

### Logi

Sprawdź logi Cloudflare Pages Functions:
1. Cloudflare Dashboard → Pages → strona-www → Functions → Logs
2. Szukaj błędów związanych z `RESEND_API_KEY` lub `contact.ts`

### Kontakt z Resend

Sprawdź w Resend Dashboard:
1. Przejdź do: https://resend.com/emails
2. Sprawdź czy są jakieś błędy wysyłki
3. Sprawdź czy API key jest aktywny: https://resend.com/api-keys
