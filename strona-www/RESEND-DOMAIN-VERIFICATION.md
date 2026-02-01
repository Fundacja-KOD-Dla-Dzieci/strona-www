# Weryfikacja domeny w Resend - Instrukcja

## Problem

Resend API zwraca błąd:
```
"You can only send testing emails to your own email address (jarode2@gmail.com). 
To send emails to other recipients, please verify a domain at resend.com/domains"
```

## Rozwiązanie: Zweryfikuj domenę fundacjakod.pl w Resend

### Krok 1: Dodaj domenę w Resend

1. Przejdź na: https://resend.com/domains
2. Kliknij **"Add Domain"**
3. Wpisz: `fundacjakod.pl`
4. Kliknij **"Add"**

### Krok 2: Skonfiguruj DNS records

Resend pokaże Ci rekordy DNS do dodania. Zwykle są to:

1. **SPF Record** (TXT):
   ```
   v=spf1 include:resend.com ~all
   ```

2. **DKIM Record** (TXT):
   ```
   [unikalny klucz od Resend]
   ```

3. **DMARC Record** (TXT) - opcjonalnie:
   ```
   v=DMARC1; p=none; rua=mailto:dmarc@fundacjakod.pl
   ```

### Krok 3: Dodaj rekordy DNS w Cloudflare

1. Przejdź do: Cloudflare Dashboard → DNS → Records
2. Dodaj rekordy TXT zgodnie z instrukcjami Resend
3. Poczekaj na propagację DNS (zwykle 5-15 minut)

### Krok 4: Zweryfikuj domenę w Resend

1. Wróć do: https://resend.com/domains
2. Kliknij **"Verify"** przy domenie `fundacjakod.pl`
3. Poczekaj na weryfikację (zwykle kilka minut)

### Krok 5: Zaktualizuj kod

Po weryfikacji domeny, zaktualizuj `functions/api/contact.ts`:

```typescript
// Zmień z:
from: 'Fundacja Kod dla Dzieci <onboarding@resend.dev>',
const contactEmail = env.CONTACT_EMAIL || 'jarode2@gmail.com';

// Na:
from: 'Fundacja Kod dla Dzieci <noreply@fundacjakod.pl>',
const contactEmail = env.CONTACT_EMAIL || 'kontakt@fundacjakod.pl';
```

### Krok 6: Redeploy

```bash
cd fundacja-kod-dla-dzieci/strona-www
npm run deploy
```

## Alternatywa: Tymczasowe rozwiązanie

Jeśli nie możesz teraz zweryfikować domeny, możesz:

1. **Użyć zweryfikowanego emaila do testów:**
   - Zmień `CONTACT_EMAIL` w Cloudflare na `jarode2@gmail.com`
   - Emails będą przychodzić na ten adres

2. **Użyć Resend test domain tylko dla developmentu:**
   - Pozostaw `onboarding@resend.dev` jako `from`
   - Użyj `jarode2@gmail.com` jako `to`

## Sprawdzenie

Po weryfikacji domeny, przetestuj:

```bash
curl -X POST https://strona-www.pages.dev/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&subject=other&message=Test"
```

Powinno zwrócić sukces i email powinien przyjść na `kontakt@fundacjakod.pl`.
