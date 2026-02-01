# ⚠️ Security Alert - API Key Exposure

## Problem
GitGuardian wykrył, że klucz API Resend został ujawniony w repozytorium GitHub.

## Rozwiązanie

### 1. ✅ Klucz usunięty z plików
- `.env.example` - zaktualizowany (placeholder zamiast prawdziwego klucza)
- `KONFIGURACJA-RESEND.md` - zaktualizowany (usunięty prawdziwy klucz)

### 2. ⚠️ WYMAGANE: Zrotuj klucz API w Resend

**Klucz został ujawniony i powinien być zrotowany:**

1. Przejdź na: https://resend.com/api-keys
2. Usuń stary klucz: `re_NJQ8ayq7_GDKGvJpRfYSVx9xHSrniFf9S`
3. Utwórz nowy klucz API
4. Zaktualizuj secret w Cloudflare Pages:
   - Cloudflare Dashboard → Pages → strona-www → Settings → Environment Variables
   - Edytuj `RESEND_API_KEY` i wstaw nowy klucz

### 3. Historia Git

Klucz nadal jest w historii commitów. Opcje:

**Opcja A: Zignoruj (jeśli repo jest prywatne)**
- Jeśli repozytorium jest prywatne, klucz jest już nieaktywny po rotacji
- Historia Git pozostaje bez zmian

**Opcja B: Usuń z historii (zaawansowane)**
- Wymaga `git filter-branch` lub `git filter-repo`
- Może być skomplikowane jeśli są inne branche/PRs
- **Zalecane tylko jeśli repo jest publiczne**

### 4. Best Practices na przyszłość

✅ **DO:**
- Używaj `.env.example` z placeholderami
- Przechowuj secrets tylko w Cloudflare Environment Variables
- Używaj `git-secrets` lub podobnych narzędzi do pre-commit hooks

❌ **DON'T:**
- Nie commituj prawdziwych kluczy API
- Nie umieszczaj secrets w dokumentacji
- Nie commituj plików `.env` z prawdziwymi wartościami

### 5. Sprawdzenie

Po rotacji klucza, przetestuj formularz:
```bash
curl -X POST https://strona-www.pages.dev/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test&email=test@example.com&subject=other&message=Test"
```

## Status

- ✅ Klucz usunięty z aktualnych plików
- ⚠️ **WYMAGANE**: Rotacja klucza w Resend
- ⚠️ **WYMAGANE**: Aktualizacja secret w Cloudflare Pages
