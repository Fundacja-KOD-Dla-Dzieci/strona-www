# Standardy kodowania - Fundacja Kod dla Dzieci

## Wprowadzenie

Niniejszy dokument określa standardy kodowania obowiązujące we wszystkich projektach Fundacji Kod dla Dzieci. Celem jest zapewnienie spójności, czytelności i jakości kodu we wszystkich projektach open-source.

## Zasady ogólne

### 1. Czytelność kodu
- Kod powinien być samodokumentujący się
- Używaj opisowych nazw zmiennych i funkcji
- Komentuj złożone algorytmy i logikę biznesową
- Unikaj skrótów i akronimów w nazwach

### 2. Spójność
- Używaj jednolitych konwencji w całym projekcie
- Przestrzegaj ustalonych wzorców architektonicznych
- Zachowaj spójność z istniejącym kodem

### 3. Dostępność
- Kod musi być dostępny dla osób z niepełnosprawnościami
- Używaj semantycznych elementów HTML
- Zapewnij odpowiedni kontrast kolorów
- Dodaj alternatywne teksty dla obrazów

## Standardy dla różnych języków

### JavaScript/TypeScript

#### Formatowanie
```javascript
// Używaj 2 spacji do wcięć
function calculateAccessibilityScore(element) {
  const score = 0;
  
  // Sprawdź kontrast kolorów
  if (hasGoodContrast(element)) {
    score += 10;
  }
  
  return score;
}

// Używaj const/let zamiast var
const accessibilityFeatures = ['screen-reader', 'keyboard-nav'];
let currentFeature = 0;

// Używaj arrow functions dla prostych operacji
const features = accessibilityFeatures.map(feature => 
  feature.toUpperCase()
);
```

#### Nazewnictwo
```javascript
// Zmienne i funkcje: camelCase
const userName = 'john_doe';
function calculateAccessibilityScore() {}

// Klasy: PascalCase
class AccessibilityChecker {}

// Stałe: UPPER_SNAKE_CASE
const MAX_ACCESSIBILITY_SCORE = 100;

// Pliki: kebab-case
// accessibility-checker.js
// user-interface.ts
```

#### Komentarze
```javascript
/**
 * Sprawdza dostępność elementu interfejsu użytkownika
 * @param {HTMLElement} element - Element do sprawdzenia
 * @param {Object} options - Opcje sprawdzania
 * @param {boolean} options.checkContrast - Czy sprawdzać kontrast
 * @returns {number} Wynik dostępności (0-100)
 */
function checkAccessibility(element, options = {}) {
  // Sprawdź kontrast kolorów
  if (options.checkContrast) {
    // Implementacja sprawdzania kontrastu
  }
}
```

### Python

#### Formatowanie
```python
# Używaj 4 spacji do wcięć
def calculate_accessibility_score(element):
    """Sprawdza dostępność elementu interfejsu."""
    score = 0
    
    # Sprawdź kontrast kolorów
    if has_good_contrast(element):
        score += 10
    
    return score

# Używaj snake_case dla nazw
user_name = 'john_doe'
accessibility_features = ['screen_reader', 'keyboard_nav']

# Używaj PascalCase dla klas
class AccessibilityChecker:
    pass

# Używaj UPPER_SNAKE_CASE dla stałych
MAX_ACCESSIBILITY_SCORE = 100
```

#### Komentarze
```python
def check_accessibility(element, check_contrast=True):
    """
    Sprawdza dostępność elementu interfejsu użytkownika.
    
    Args:
        element: Element do sprawdzenia
        check_contrast: Czy sprawdzać kontrast kolorów
        
    Returns:
        Wynik dostępności (0-100)
    """
    # Sprawdź kontrast kolorów
    if check_contrast:
        # Implementacja sprawdzania kontrastu
        pass
```

### HTML

#### Struktura
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundacja Kod dla Dzieci - EyeTalk</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Używaj semantycznych elementów -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">Strona główna</a></li>
                <li><a href="#projects">Projekty</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>EyeTalk - Komunikator wzrokowy</h1>
            <p>Komunikator dla dzieci z porażeniem mózgowym</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Fundacja Kod dla Dzieci</p>
    </footer>
</body>
</html>
```

#### Dostępność
```html
<!-- Zawsze dodawaj alt text do obrazów -->
<img src="eye-tracker.jpg" alt="Dziecko korzystające z komunikatora wzrokowego">

<!-- Używaj aria-label dla elementów interaktywnych -->
<button aria-label="Rozpocznij kalibrację wzroku">Start</button>

<!-- Grupuj powiązane elementy -->
<fieldset>
    <legend>Ustawienia komunikatora</legend>
    <input type="checkbox" id="sound" name="sound">
    <label for="sound">Dźwięki</label>
</fieldset>

<!-- Używaj role dla niestandardowych elementów -->
<div role="button" tabindex="0" aria-label="Wybierz opcję">Opcja</div>
```

### CSS

#### Formatowanie
```css
/* Używaj 2 spacji do wcięć */
.accessibility-checker {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Grupuj właściwości logicznie */
.accessibility-checker__button {
  /* Pozycjonowanie */
  position: relative;
  top: 0;
  left: 0;
  
  /* Wygląd */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  
  /* Typografia */
  font-size: 1rem;
  font-weight: 500;
  
  /* Interakcja */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

/* Używaj BEM dla nazewnictwa klas */
.accessibility-checker__button--primary {
  background-color: #007bff;
}

.accessibility-checker__button--secondary {
  background-color: #6c757d;
}
```

#### Dostępność
```css
/* Zapewnij odpowiedni kontrast */
.text-primary {
  color: #212529; /* Kontrast 4.5:1 na białym tle */
}

/* Dodaj focus states */
.button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Używaj rem dla rozmiarów czcionek */
.text-large {
  font-size: 1.25rem; /* 20px */
}

/* Zapewnij responsywność */
@media (max-width: 768px) {
  .accessibility-checker {
    flex-direction: column;
  }
}
```

## Testowanie

### 1. Testy jednostkowe
```javascript
// Używaj opisowych nazw testów
describe('AccessibilityChecker', () => {
  it('should calculate score correctly for accessible element', () => {
    const element = createAccessibleElement();
    const score = checker.calculateScore(element);
    expect(score).toBe(100);
  });
  
  it('should return 0 for inaccessible element', () => {
    const element = createInaccessibleElement();
    const score = checker.calculateScore(element);
    expect(score).toBe(0);
  });
});
```

### 2. Testy dostępności
```javascript
// Testuj dostępność automatycznie
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<AccessibilityChecker />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 3. Testy z użytkownikami
- Testuj z rzeczywistymi użytkownikami
- Używaj screen readerów
- Testuj nawigację klawiaturą
- Sprawdź kontrast kolorów

## Dokumentacja

### 1. README projektu
```markdown
# EyeTalk - Komunikator wzrokowy

## Opis
Komunikator sterowany wzrokiem dla dzieci z porażeniem mózgowym.

## Instalacja
```bash
npm install
npm start
```

## Dostępność
Projekt spełnia standardy WCAG 2.1 AA.

## Testowanie
```bash
npm test
npm run test:accessibility
```
```

### 2. Dokumentacja API
```javascript
/**
 * @api {post} /api/calibrate Kalibracja wzroku
 * @apiName CalibrateEye
 * @apiGroup EyeTracking
 * 
 * @apiParam {Object} calibrationData Dane kalibracji
 * @apiParam {number} calibrationData.x Pozycja X
 * @apiParam {number} calibrationData.y Pozycja Y
 * 
 * @apiSuccess {boolean} success Status operacji
 * @apiSuccess {string} message Komunikat
 */
```

## Narzędzia

### 1. Lintery
- ESLint dla JavaScript/TypeScript
- Prettier dla formatowania
- Stylelint dla CSS
- HTMLHint dla HTML

### 2. Testy dostępności
- axe-core
- Lighthouse
- WAVE
- Color Contrast Analyzer

### 3. IDE i edytory
- VS Code z rozszerzeniami dostępności
- WebStorm z wbudowanymi narzędziami
- Sublime Text z pakietami dostępności

## Przegląd kodu

### 1. Checklista
- [ ] Kod jest czytelny i dobrze udokumentowany
- [ ] Testy przechodzą
- [ ] Brak naruszeń dostępności
- [ ] Zgodność ze standardami
- [ ] Responsywność na różnych urządzeniach

### 2. Proces
1. Twórz pull request z opisem zmian
2. Dodaj testy dla nowej funkcjonalności
3. Sprawdź dostępność
4. Poproś o code review
5. Po zatwierdzeniu zmerguj do main

## Zasoby

### 1. Dokumentacja dostępności
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)

### 2. Narzędzia testowe
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)

### 3. Przewodniki
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)

---

**Pamiętaj: Dostępność to nie opcja, to wymóg. Tworzymy technologie dla wszystkich.**
