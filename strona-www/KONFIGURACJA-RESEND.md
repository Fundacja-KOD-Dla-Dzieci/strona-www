# Konfiguracja formularza kontaktowego

Formularz kontaktowy używa Resend API do wysyłki emaili przez Cloudflare Pages Functions.

## Wymagania

1. Konto na [Resend.com](https://resend.com)
2. Zweryfikowana domena `fundacjakod.pl` w Resend
3. Cloudflare Pages z skonfigurowanymi environment variables

## Konfiguracja

### 1. Utwórz API Key w Resend

1. Przejdź na: https://resend.com/api-keys
2. Utwórz nowy API Key
3. Skopiuj klucz (zaczyna się od `re_`)

### 2. Zweryfikuj domenę w Resend

1. Przejdź na: https://resend.com/domains
2. Dodaj domenę `fundacjakod.pl`
3. Dodaj rekordy DNS w Cloudflare zgodnie z instrukcjami Resend
4. Zweryfikuj domenę

### 3. Skonfiguruj environment variables w Cloudflare Pages

1. Cloudflare Dashboard → Pages → strona-www → Settings → Environment Variables
2. Dodaj dla **Production**:
   - `RESEND_API_KEY` = [Twój klucz API z Resend]
   - `CONTACT_EMAIL` = kontakt@fundacjakod.pl (opcjonalne, domyślnie używa tego adresu)

### 4. Redeploy

Po dodaniu environment variables, wykonaj redeploy:

```bash
npm run deploy
```

Lub przez Cloudflare Dashboard → Pages → strona-www → Create deployment

## Testowanie

Po konfiguracji, przetestuj formularz:

```bash
curl -X POST https://strona-www.pages.dev/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&subject=other&message=Test message"
```

Powinno zwrócić:
```json
{"success":true,"message":"Wiadomość została wysłana. Dziękujemy!"}
```

## Troubleshooting

### Email nie przychodzi
- Sprawdź spam folder
- Sprawdź Cloudflare Pages → Functions → Logs
- Sprawdź Resend Dashboard → Emails

### Błąd 500
- Sprawdź czy `RESEND_API_KEY` jest poprawnie ustawiony
- Sprawdź czy domena jest zweryfikowana w Resend
- Sprawdź logi Cloudflare Pages Functions

## Dokumentacja

- [Resend API Documentation](https://resend.com/docs)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
