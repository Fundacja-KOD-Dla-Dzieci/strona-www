# Formularz kontaktowy - wysyłka emaili na Cloudflare Pages

## Problem
Formularz kontaktowy obecnie tylko symuluje wysyłkę (nie wysyła prawdziwych emaili).

## Rozwiązania dla Cloudflare Pages

### Opcja 1: Cloudflare Pages Functions + Static Forms Plugin (REKOMENDOWANE)
**Najlepsze rozwiązanie natywne dla Cloudflare**

#### Zalety:
- ✅ Działa natywnie z Cloudflare Pages
- ✅ Darmowe w ramach planu Pages
- ✅ Pełna kontrola nad przetwarzaniem
- ✅ Możliwość integracji z SendGrid/Mailgun dla emaili

#### Wymagania:
- Cloudflare Pages Functions (serverless functions)
- Static Forms Plugin
- Zewnętrzny serwis email (SendGrid/Mailgun) lub Cloudflare Email Routing

#### Implementacja:
1. Utworzyć folder `functions/api/contact/` w projekcie
2. Dodać handler funkcji
3. Skonfigurować Static Forms Plugin
4. Dodać integrację z SendGrid/Mailgun

---

### Opcja 2: Formspree (NAJPROSTSZE)
**Zewnętrzny serwis, zero konfiguracji**

#### Zalety:
- ✅ Najprostsze w implementacji (5 minut)
- ✅ Darmowy plan: 50 formularzy/miesiąc
- ✅ Automatyczne email notifications
- ✅ Spam protection wbudowane
- ✅ Nie wymaga backendu

#### Wady:
- ⚠️ Zewnętrzny serwis (zależność)
- ⚠️ Limit 50 formularzy/miesiąc na darmowym planie

#### Implementacja:
1. Założyć konto na formspree.io
2. Utworzyć formularz
3. Dodać `action` i `method` do HTML formularza
4. Gotowe!

---

### Opcja 3: EmailJS (Client-side)
**Wysyłka emaili bezpośrednio z przeglądarki**

#### Zalety:
- ✅ Działa całkowicie client-side
- ✅ Darmowy plan: 200 emaili/miesiąc
- ✅ Łatwa integracja
- ✅ Nie wymaga backendu

#### Wady:
- ⚠️ API key widoczny w kodzie (można zabezpieczyć)
- ⚠️ Mniej bezpieczne niż server-side

---

### Opcja 4: Cloudflare Email Routing + Workers
**Pełna kontrola, ale bardziej skomplikowane**

#### Zalety:
- ✅ Pełna kontrola
- ✅ Darmowe w ramach Cloudflare
- ✅ Bez zewnętrznych zależności

#### Wady:
- ⚠️ Wymaga konfiguracji Email Routing
- ⚠️ Więcej kodu do napisania

---

## REKOMENDACJA: Formspree (Opcja 2)

**Dlaczego:**
- Najszybsze do wdrożenia (5 minut)
- Zero konfiguracji backendu
- Działa od razu po dodaniu action URL
- Darmowy plan wystarczy na start
- Spam protection wbudowane

## Następne kroki

1. **Utworzyć konto Formspree** (lub wybrać inną opcję)
2. **Zaktualizować HTML formularza** (dodać action URL)
3. **Zaktualizować JavaScript** (usunąć preventDefault, dodać obsługę)
4. **Przetestować lokalnie**
5. **Deploy na Cloudflare Pages**

---

## Email docelowy
- **kontakt@fundacjakod.pl** (z sekcji kontakt)
