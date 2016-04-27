# Scaffolding for fast start Frontend

Для работы выполнить:
```bash
npm install -g gulp
cd ___gulp
npm install
gulp
```

## Стоит отметить, что не добавлена папка bower_componets в ignore, так как первоначально сам автор первой станицы решил менять основные плагины

Вся 'магия' происходит в папке __dev.
Также используются livereload, autoprefixer, uglify, sourcemaps, minifyCSS и др.

Автоматизация:
* Для шаблонов - jade
* Для стилей - препроцессров stylus
* Для js - в один файл rigger`м подключаются модули
* Создание спрайтов - spritesmith

Создается документация для js (jsDoc)
```bash
gulp js:Doc
```

Для проекта генерируется index.html (страница со списком макетов).
Node.js до v0.12.8
