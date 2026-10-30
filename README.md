# sez-dist-monitoring

Собранный виджет «Платформа СЭЗ» для ArcGIS Experience Builder 1.18 (ArcGIS Enterprise 12.0). Виджет открывает платформу мониторинга СЭЗ во фрейме на всю страницу приложения.

Корень репозитория — это папка виджета: `manifest.json`, `config.json`, `icon.svg`, `dist/`. Здесь только результат сборки (`npm run build:for-download`). Исходный код лежит в репозитории платформы, в папке `arcgis/`, и публикуется сюда скриптом `arcgis/publish-widget.sh`.

## Установка на IIS (один раз)

```powershell
mkdir C:\inetpub\wwwroot\sez-widgets
cd C:\inetpub\wwwroot\sez-widgets
git clone https://github.com/developershahzod/sez-dist-monitoring.git sez-platform
```

Без git: на этой странице GitHub «Code» → «Download ZIP», распакуйте содержимое в `C:\inetpub\wwwroot\sez-widgets\sez-platform\`.

Проверка в окне без входа: `https://sgm.uzspace.uz/sez-widgets/sez-platform/manifest.json` показывает JSON. Папке нужен анонимный доступ. `web.config` из репозитория ставит кэш на 5 минут и не даёт открыть папку `.git`.

## Регистрация в портале (один раз, администратор портала)

«Мои ресурсы» (My Content) → «Добавить элемент» (Add Item) → «Приложение» (An application) → «Виджет Experience Builder» (Experience Builder widget) → URL `manifest.json` из проверки выше → «Добавить элемент». Затем откройте общий доступ к элементу для организации или нужных групп.

В Experience Builder портала виджет появится в группе «Пользовательские» (Custom).

## Обновление

```powershell
cd C:\inetpub\wwwroot\sez-widgets\sez-platform
git pull
```

Регистрацию повторять не нужно: приложения подхватят новые файлы сами.

## Адрес платформы

По умолчанию `https://sez.sgm.uzspace.uz/` (файл `config.json`). В приложении адрес меняется в настройках виджета, поле «Адрес платформы».
