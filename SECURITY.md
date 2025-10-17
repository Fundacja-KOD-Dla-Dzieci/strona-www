# Security Policy - Fundacja Kod dla Dzieci

## Obsługiwane wersje

Używamy wersjonowania semantycznego i zapewniamy wsparcie bezpieczeństwa dla następujących wersji:

| Wersja | Wsparcie          |
| ------- | ----------------- |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Zgłaszanie luk bezpieczeństwa

### Jak zgłosić lukę

Jeśli odkryłeś lukę bezpieczeństwa w naszych projektach, zgłoś ją odpowiedzialnie:

1. **NIE** publikuj informacji publicznie
2. **NIE** otwieraj publicznego issue na GitHub
3. Wyślij email na: **security@fundacjakod.pl**

### Co zawrzeć w zgłoszeniu

- Opis luki bezpieczeństwa
- Kroki do reprodukcji problemu
- Potencjalny wpływ na użytkowników
- Sugerowane rozwiązanie (jeśli masz)
- Twoje dane kontaktowe

### Proces odpowiedzi

1. **Potwierdzenie:** Potwierdzimy otrzymanie zgłoszenia w ciągu 48h
2. **Weryfikacja:** Sprawdzimy i zweryfikujemy lukę
3. **Naprawa:** Opracujemy i przetestujemy poprawkę
4. **Publikacja:** Opublikujemy poprawkę i poinformujemy o luce
5. **Uznanie:** Podziękujemy za zgłoszenie (jeśli zgłaszający sobie życzy)

### Czas odpowiedzi

- **Potwierdzenie:** 48 godzin
- **Weryfikacja:** 7 dni
- **Naprawa:** 30 dni (w zależności od złożoności)
- **Publikacja:** 90 dni od zgłoszenia

## Zasady bezpieczeństwa

### Dane osobowe

- **Minimalizacja:** Zbieramy tylko niezbędne dane
- **Szyfrowanie:** Wszystkie dane są szyfrowane w spoczynku i transicie
- **Dostęp:** Dostęp tylko dla autoryzowanych osób
- **Retencja:** Dane są przechowywane tylko tak długo, jak to konieczne

### Bezpieczeństwo kodu

- **Code review:** Wszystkie zmiany przechodzą przez code review
- **Testy bezpieczeństwa:** Regularne testy penetracyjne
- **Zależności:** Regularne aktualizacje zależności
- **Secrets:** Nigdy nie commitujemy haseł i kluczy API

### Infrastruktura

- **HTTPS:** Wszystkie połączenia są szyfrowane
- **Firewall:** Ograniczony dostęp do serwerów
- **Monitoring:** Monitoring bezpieczeństwa 24/7
- **Backup:** Regularne kopie zapasowe danych

## Najlepsze praktyki dla kontrybutorów

### Przed commitem

- Sprawdź czy nie commitujesz danych wrażliwych
- Uruchom testy bezpieczeństwa
- Przejrzyj kod pod kątem luk bezpieczeństwa
- Upewnij się, że wszystkie zależności są aktualne

### Podczas developmentu

- Używaj silnych haseł i 2FA
- Nie udostępniaj danych testowych z prawdziwymi danymi
- Używaj zmiennych środowiskowych dla konfiguracji
- Dokumentuj wszystkie zmiany bezpieczeństwa

### Po commicie

- Monitoruj logi pod kątem podejrzanej aktywności
- Regularnie aktualizuj zależności
- Testuj zmiany w środowisku staging
- Informuj zespół o zmianach bezpieczeństwa

## Narzędzia bezpieczeństwa

### Automatyczne skanowanie

- **GitHub Security Advisories:** Automatyczne skanowanie zależności
- **CodeQL:** Analiza kodu pod kątem luk bezpieczeństwa
- **Dependabot:** Automatyczne aktualizacje zależności
- **Snyk:** Skanowanie luk w zależnościach

### Testy penetracyjne

- Regularne testy zewnętrzne
- Testy wewnętrzne przez zespół
- Bug bounty program (planowany)
- Audyty bezpieczeństwa (roczne)

## Szkolenia bezpieczeństwa

### Dla zespołu

- Regularne szkolenia z bezpieczeństwa
- Warsztaty z bezpiecznego programowania
- Symulacje ataków phishingowych
- Aktualizacje o nowych zagrożeniach

### Dla wolontariuszy

- Onboarding z zasadami bezpieczeństwa
- Dostęp do materiałów edukacyjnych
- Wsparcie w implementacji bezpiecznych praktyk
- Regularne przypominanie o zasadach

## Incydenty bezpieczeństwa

### Procedura reagowania

1. **Wykrycie:** Identyfikacja incydentu bezpieczeństwa
2. **Ocena:** Ocena skali i wpływu incydentu
3. **Reakcja:** Natychmiastowe działania naprawcze
4. **Komunikacja:** Informowanie zainteresowanych stron
5. **Analiza:** Analiza przyczyn i lekcji
6. **Poprawa:** Implementacja ulepszeń

### Komunikacja

- **Wewnętrzna:** Natychmiastowe powiadomienie zespołu
- **Zewnętrzna:** Komunikacja z użytkownikami w ciągu 72h
- **Regulator:** Zgłoszenie do odpowiednich organów (jeśli wymagane)
- **Media:** Przygotowanie komunikatu prasowego

## Kontakt

### Zgłoszenia bezpieczeństwa
- **Email:** security@fundacjakod.pl
- **PGP:** [Klucz PGP dostępny na żądanie]

### Pytania ogólne
- **Email:** kontakt@fundacjakod.pl
- **Discord:** Kanał #security

### Inne sprawy bezpieczeństwa
- **Email:** admin@fundacjakod.pl

---

**Bezpieczeństwo jest naszym priorytetem. Dziękujemy za pomoc w utrzymaniu bezpieczeństwa naszych projektów i użytkowników.**

*Ostatnia aktualizacja: 2025-01-17*
