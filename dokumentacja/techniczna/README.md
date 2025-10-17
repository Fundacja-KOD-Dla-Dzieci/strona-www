# Dokumentacja techniczna

Ten katalog zawiera dokumentację techniczną projektów Fundacji Kod dla Dzieci.

## Struktura katalogów

### `projekty/`
Dokumentacja poszczególnych projektów technologicznych:
- **EyeTalk**: Komunikator sterowany wzrokiem
- **OpenAAC**: System komunikacji alternatywnej
- **MotionPlay**: Gry rehabilitacyjne

### `standardy/`
Standardy kodowania i procesy:
- **kodowanie.md**: Standardy kodowania
- **git-workflow.md**: Proces pracy z Git
- **code-review.md**: Proces przeglądu kodu

### `architektura/`
Dokumentacja architektury systemów:
- **infrastruktura.md**: Architektura infrastruktury
- **bezpieczenstwo.md**: Polityka bezpieczeństwa
- **deployment.md**: Proces wdrażania

## Zasady dokumentacji

### 1. Format
- **Markdown**: Wszystkie dokumenty w formacie Markdown
- **Struktura**: Spójna struktura nagłówków
- **Linki**: Wzajemne odwołania między dokumentami

### 2. Aktualizacja
- **Na bieżąco**: Dokumentacja aktualizowana z kodem
- **Code review**: Dokumentacja sprawdzana podczas review
- **Wersjonowanie**: Dokumentacja wersjonowana z kodem

### 3. Dostępność
- **Publiczne**: Wszystkie dokumenty są publiczne
- **Open source**: Zgodnie z filozofią fundacji
- **Przejrzyste**: Jasne i zrozumiałe dla wszystkich

## Szablony dokumentacji

### README projektu
```markdown
# [Nazwa Projektu]

## Opis
Krótki opis projektu i jego celu.

## Instalacja
Instrukcje instalacji i konfiguracji.

## Użycie
Przykłady użycia i podstawowe funkcje.

## Dostępność
Informacje o dostępności dla osób z niepełnosprawnościami.

## Testowanie
Instrukcje uruchamiania testów.

## Wkład
Jak można przyczynić się do rozwoju projektu.

## Licencja
Informacje o licencji.
```

### Dokumentacja API
```markdown
# API Documentation

## Endpoints

### POST /api/calibrate
Kalibracja wzroku dla komunikatora.

**Request:**
```json
{
  "calibrationData": {
    "x": 100,
    "y": 200
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Calibration completed"
}
```
```

## Narzędzia

### Generowanie dokumentacji
- **JSDoc**: Dokumentacja JavaScript
- **Sphinx**: Dokumentacja Python
- **GitBook**: Dokumentacja projektów

### Hosting dokumentacji
- **GitHub Pages**: Automatyczne publikowanie
- **Netlify**: Deployment z Git
- **Vercel**: Hosting dla dokumentacji

## Kontakt

W przypadku pytań dotyczących dokumentacji technicznej:
- **GitHub Issues**: [github.com/fundacjakod/issues](https://github.com/fundacjakod/issues)
- **Email**: tech@fundacjakod.pl
- **Discord**: Kanał #documentation
