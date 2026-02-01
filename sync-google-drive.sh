#!/bin/bash
# Skrypt synchronizacji z Google Drive
# Używa rclone do synchronizacji dokumentów fundacji

# Konfiguracja
SOURCE_DIR="/home/jarek/fundacjamaja/fundacja-kod-dla-dzieci/dokumentacja"
REMOTE_DIR="gdrive:fundacja-kod-dla-dzieci/dokumentacja"
LOG_FILE="/home/jarek/fundacjamaja/fundacja-kod-dla-dzieci/sync.log"

echo "🔄 Rozpoczynam synchronizację z Google Drive..."
echo "📁 Źródło: $SOURCE_DIR"
echo "☁️  Cel: $REMOTE_DIR"
echo "📝 Log: $LOG_FILE"
echo ""

# Sprawdź czy rclone jest zainstalowany
if ! command -v rclone &> /dev/null; then
    echo "❌ rclone nie jest zainstalowany!"
    echo "📥 Instaluję rclone..."
    curl https://rclone.org/install.sh | sudo bash
fi

# Sprawdź czy Google Drive jest skonfigurowany
if ! rclone listremotes | grep -q "gdrive:"; then
    echo "❌ Google Drive nie jest skonfigurowany!"
    echo "🔧 Uruchom: rclone config"
    echo "   - Wybierz 'drive'"
    echo "   - Dodaj Client ID i Secret"
    echo "   - Autoryzuj dostęp"
    exit 1
fi

# Synchronizacja
echo "🚀 Synchronizuję pliki..."
rclone sync "$SOURCE_DIR" "$REMOTE_DIR" \
    --progress \
    --log-file="$LOG_FILE" \
    --log-level=INFO \
    --exclude="*.tmp" \
    --exclude="*.bak" \
    --exclude=".DS_Store"

if [ $? -eq 0 ]; then
    echo "✅ Synchronizacja zakończona pomyślnie!"
    echo "📊 Szczegóły w logu: $LOG_FILE"
else
    echo "❌ Błąd podczas synchronizacji!"
    echo "📊 Sprawdź log: $LOG_FILE"
fi

echo ""
echo "🌐 Dostęp do dokumentów:"
echo "   https://drive.google.com/drive/folders/[FOLDER_ID]"
echo ""
echo "🔄 Aby uruchomić ponownie:"
echo "   ./sync-google-drive.sh"
