# Instrukcja: Wysyłka emaili z formularza kontaktowego

## Opcja 1: Formspree (NAJPROSTSZE - REKOMENDOWANE) ⭐

### Krok 1: Utwórz konto Formspree
1. Przejdź na https://formspree.io
2. Zarejestruj się (darmowe konto)
3. Utwórz nowy formularz
4. Skopiuj **Form ID** (np. `YOUR_FORM_ID`)

### Krok 2: Zaktualizuj HTML
W pliku `index.html` znajdź formularz i zaktualizuj `action`:

```html
<form class="form" id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

**Zamień `YOUR_FORM_ID` na prawdziwy Form ID z Formspree.**

### Krok 3: Skonfiguruj email w Formspree
1. W panelu Formspree przejdź do ustawień formularza
2. Dodaj email docelowy: **kontakt@fundacjakod.pl**
3. Włącz powiadomienia email

### Krok 4: Gotowe!
Formularz będzie automatycznie wysyłał emaile na **kontakt@fundacjakod.pl**

**Limity darmowego planu:**
- 50 formularzy/miesiąc
- Spam protection wbudowane
- Email notifications

---

## Opcja 2: Cloudflare Pages Functions (zaawansowane)

### Wymagania:
- Cloudflare Pages z Functions
- SendGrid API key (lub Mailgun)
- Konfiguracja environment variables

### Krok 1: Utwórz strukturę funkcji
Pliki już są utworzone:
- `functions/api/contact.ts` - handler formularza
- `functions/_middleware.ts` - middleware dla Static Forms

### Krok 2: Zaktualizuj HTML formularza
W `index.html` zmień formularz na:

```html
<form class="form" method="POST" action="/api/contact" data-static-form-name="contact">
```

### Krok 3: Zainstaluj zależności (jeśli używasz Static Forms Plugin)
```bash
npm install @cloudflare/pages-plugin-static-forms
```

### Krok 4: Skonfiguruj SendGrid
1. Załóż konto na SendGrid (darmowy plan: 100 emaili/dzień)
2. Utwórz API Key
3. W Cloudflare Pages → Settings → Environment Variables dodaj:
   - `SENDGRID_API_KEY` = twój API key
   - `CONTACT_EMAIL` = kontakt@fundacjakod.pl

### Krok 5: Deploy
```bash
# Deploy na Cloudflare Pages
wrangler pages deploy . --project-name=strona-www
```

---

## Opcja 3: EmailJS (client-side, szybkie)

### Krok 1: Utwórz konto EmailJS
1. Przejdź na https://www.emailjs.com
2. Zarejestruj się (darmowy plan: 200 emaili/miesiąc)
3. Utwórz Email Service (Gmail/Outlook/SMTP)
4. Utwórz Email Template
5. Skopiuj **Public Key** i **Service ID**, **Template ID**

### Krok 2: Dodaj EmailJS do HTML
W `<head>` dodaj:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

### Krok 3: Zaktualizuj JavaScript
W `assets/js/main.js` zmień handler formularza na:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // ... walidacja ...
    
    try {
        await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);
        showMessage('Dziękujemy za wiadomość!', 'success');
        this.reset();
    } catch (error) {
        showMessage('Błąd wysyłki. Spróbuj ponownie.', 'error');
    }
});
```

---

## Porównanie opcji

| Opcja | Trudność | Koszt | Limit | Setup |
|-------|----------|-------|-------|-------|
| **Formspree** | ⭐ Łatwe | Darmowe | 50/miesiąc | 5 min |
| **Cloudflare Functions** | ⭐⭐⭐ Trudne | Darmowe | Bez limitu* | 30 min |
| **EmailJS** | ⭐⭐ Średnie | Darmowe | 200/miesiąc | 15 min |

*Wymaga SendGrid/Mailgun (darmowe plany mają limity)

---

## REKOMENDACJA: Formspree

**Dlaczego:**
- Najszybsze wdrożenie (5 minut)
- Zero konfiguracji backendu
- Działa od razu
- Spam protection wbudowane
- Wystarczy dla startu (50 formularzy/miesiąc)

**Gdy potrzebujesz więcej:**
- Formspree Pro: $10/miesiąc (1000 formularzy)
- Lub przejść na Cloudflare Functions + SendGrid

---

## Testowanie

Po skonfigurowaniu:
1. Wypełnij formularz na stronie
2. Sprawdź email **kontakt@fundacjakod.pl**
3. Sprawdź panel Formspree (jeśli używasz Formspree)

---

## Troubleshooting

**Formularz nie wysyła:**
- Sprawdź czy `action` URL jest poprawny
- Sprawdź console w przeglądarce (F12)
- Sprawdź czy JavaScript nie blokuje wysyłki

**Nie przychodzą emaile:**
- Sprawdź spam folder
- Sprawdź ustawienia w Formspree/EmailJS
- Sprawdź czy email docelowy jest poprawny
