# Git Workflow - Fundacja Kod dla Dzieci

## Wprowadzenie

Ten dokument opisuje standardy pracy z Git w projektach Fundacji Kod dla Dzieci. Celem jest zapewnienie spójnego i efektywnego procesu rozwoju oprogramowania.

## Struktura repozytorium

### Branching strategy

Używamy **Git Flow** z następującymi gałęziami:

```
main (produkcja)
├── develop (rozwój)
├── feature/eye-talk-calibration (funkcje)
├── hotfix/critical-bug-fix (poprawki)
└── release/v1.0.0 (wydania)
```

### Typy gałęzi

#### 1. `main`
- Zawsze stabilna wersja produkcyjna
- Chroniona przed bezpośrednimi pushami
- Tylko merge z `develop` lub `hotfix`
- Każdy commit to wydanie

#### 2. `develop`
- Główna gałąź rozwoju
- Integracja wszystkich funkcji
- Testy automatyczne muszą przechodzić
- Merge do `main` przez `release`

#### 3. `feature/*`
- Nowe funkcje i ulepszenia
- Nazwa: `feature/nazwa-funkcji`
- Branch z `develop`
- Merge do `develop`

#### 4. `hotfix/*`
- Krytyczne poprawki w produkcji
- Nazwa: `hotfix/opis-poprawki`
- Branch z `main`
- Merge do `main` i `develop`

#### 5. `release/*`
- Przygotowanie wydania
- Nazwa: `release/wersja`
- Branch z `develop`
- Merge do `main` i `develop`

## Proces rozwoju

### 1. Rozpoczęcie nowej funkcji

```bash
# Przełącz na develop
git checkout develop
git pull origin develop

# Utwórz nową gałąź funkcji
git checkout -b feature/eye-talk-calibration

# Rozpocznij pracę
# ... kodowanie ...
```

### 2. Commity

#### Konwencja commitów
```
<type>(<scope>): <description>

<body>

<footer>
```

#### Typy commitów
- `feat`: nowa funkcja
- `fix`: poprawka błędu
- `docs`: dokumentacja
- `style`: formatowanie
- `refactor`: refaktoryzacja
- `test`: testy
- `chore`: zadania pomocnicze

#### Przykłady
```bash
feat(eye-tracker): add calibration algorithm
fix(accessibility): improve screen reader support
docs(readme): update installation instructions
test(calibration): add unit tests for accuracy
```

#### Scope (opcjonalny)
- `eye-tracker`: moduł śledzenia wzroku
- `accessibility`: funkcje dostępności
- `ui`: interfejs użytkownika
- `api`: API backend
- `docs`: dokumentacja

### 3. Push i Pull Request

```bash
# Push gałęzi
git push origin feature/eye-talk-calibration

# Utwórz Pull Request na GitHub
# Tytuł: feat(eye-tracker): add calibration algorithm
# Opis: Szczegółowy opis zmian i testów
```

### 4. Code Review

#### Checklista dla reviewerów
- [ ] Kod jest czytelny i dobrze udokumentowany
- [ ] Testy przechodzą
- [ ] Brak naruszeń dostępności
- [ ] Zgodność ze standardami kodowania
- [ ] Responsywność na różnych urządzeniach
- [ ] Bezpieczeństwo danych użytkowników

#### Proces review
1. Automatyczne testy (CI/CD)
2. Review kodu przez 2 osoby
3. Testy dostępności
4. Testy z użytkownikami końcowymi
5. Zatwierdzenie i merge

### 5. Merge

#### Merge do develop
```bash
# Po zatwierdzeniu PR
git checkout develop
git pull origin develop
git merge feature/eye-talk-calibration
git push origin develop
```

#### Merge do main (wydanie)
```bash
# Utwórz release branch
git checkout -b release/v1.0.0 develop

# Przygotuj wydanie
# ... aktualizacja wersji, changelog ...

# Merge do main
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git push origin main --tags

# Merge do develop
git checkout develop
git merge release/v1.0.0
git push origin develop
```

## Konfiguracja Git

### Globalna konfiguracja
```bash
git config --global user.name "Jan Kowalski"
git config --global user.email "jan@fundacjakod.pl"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

### Konfiguracja projektu
```bash
# W katalogu projektu
git config user.name "Jan Kowalski"
git config user.email "jan@fundacjakod.pl"
```

### Hooks Git

#### Pre-commit hook
```bash
#!/bin/sh
# Sprawdź formatowanie kodu
npm run lint
npm run test
```

#### Commit-msg hook
```bash
#!/bin/sh
# Sprawdź format wiadomości commit
commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format!"
    exit 1
fi
```

## Narzędzia i integracje

### GitHub Actions (CI/CD)

#### Workflow dla testów
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Run accessibility tests
        run: npm run test:accessibility
```

#### Workflow dla wydań
```yaml
name: Release
on:
  push:
    tags:
      - 'v*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy
```

### Branch protection rules

#### Dla gałęzi `main`
- Require pull request reviews (2 reviewers)
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to main branch

#### Dla gałęzi `develop`
- Require pull request reviews (1 reviewer)
- Require status checks to pass
- Allow force pushes (for rebasing)

## Najlepsze praktyki

### 1. Częste commity
```bash
# Zamiast jednego dużego commita
git commit -m "feat: add eye tracking system"

# Lepiej kilka małych commitów
git commit -m "feat(eye-tracker): add basic tracking"
git commit -m "feat(eye-tracker): add calibration UI"
git commit -m "test(eye-tracker): add unit tests"
```

### 2. Opisowe wiadomości
```bash
# Złe
git commit -m "fix bug"

# Dobre
git commit -m "fix(accessibility): improve screen reader support for buttons"
```

### 3. Rebase przed merge
```bash
# Przed stworzeniem PR
git checkout feature/eye-talk-calibration
git rebase develop
git push --force-with-lease origin feature/eye-talk-calibration
```

### 4. Czyszczenie gałęzi
```bash
# Po merge, usuń lokalną gałąź
git branch -d feature/eye-talk-calibration

# Usuń zdalną gałąź
git push origin --delete feature/eye-talk-calibration
```

## Rozwiązywanie konfliktów

### 1. Merge conflicts
```bash
# Podczas merge
git merge feature/eye-talk-calibration
# ... konflikty ...
# Edytuj pliki, usuń markery konfliktów
git add .
git commit
```

### 2. Rebase conflicts
```bash
# Podczas rebase
git rebase develop
# ... konflikty ...
# Edytuj pliki, usuń markery konfliktów
git add .
git rebase --continue
```

### 3. Strategie rozwiązywania
- **Ours**: zachowaj zmiany z bieżącej gałęzi
- **Theirs**: zachowaj zmiany z mergowanej gałęzi
- **Manual**: ręczne rozwiązanie konfliktów

## Narzędzia pomocnicze

### 1. Git aliases
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### 2. Git hooks
```bash
# Pre-commit hook dla formatowania
npm install --save-dev husky lint-staged
```

### 3. IDE integracje
- **VS Code**: GitLens, Git Graph
- **WebStorm**: wbudowane narzędzia Git
- **Sublime Text**: GitSavvy

## Troubleshooting

### 1. Częste problemy

#### Zresetowanie do poprzedniego commita
```bash
git reset --hard HEAD~1
```

#### Odzyskanie usuniętej gałęzi
```bash
git reflog
git checkout -b feature/eye-talk-calibration <commit-hash>
```

#### Zmiana ostatniego commita
```bash
git commit --amend -m "Nowa wiadomość"
```

### 2. Przydatne komendy
```bash
# Historia commitów
git log --oneline --graph

# Status plików
git status

# Różnice
git diff

# Stash zmian
git stash
git stash pop
```

## Zasoby

### 1. Dokumentacja
- [Pro Git Book](https://git-scm.com/book)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### 2. Narzędzia
- [GitHub Desktop](https://desktop.github.com/)
- [SourceTree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)

### 3. Kursy
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Learn Git](https://learngitbranching.js.org/)

---

**Pamiętaj: Git to narzędzie współpracy. Komunikuj się z zespołem o zmianach i zawsze testuj przed commitem.**
