![Codewars](https://github.r2v.ch/codewars?user=mbanakova&top_languages=true)

## Project setup

npm install

### Compiles and hot-reloads for development

npm run start

### Compiles and minifies for production

npm run build

### Как работать с картинками:

Все картинки сложить в src/img.
Если у картинки есть вариант для мобилы, назвать её с приставкой -mob (car.jpg --> car-mob.jpg).
Сбилдить проект, чтобы в /dist появились webp.
Утащить из /dist картинки webp в /src (Пока так, т.к. webp плагин не дружит с пятым вебпаком).
В компонентах есть Picture.vue.
Там готова разметка тега picture с разными source, чтобы по 100 раз не писать их. Лишнее можно удалить.
В компонент, куда нужна картинка импортировать:
import Picture from "./components/Picture.vue";
вставить:
<Picture name="pic" alt="test" :isMobile="true"></Picture>
Name, alt, isMobile — это пропсы, name = название картинки, без -mob, alt просто придумать. isMobile означает что у картинки есть вариант для мобилы, который мы назвали -mob,
чтобы тег source не делал нам мозги.

### Как работать с svg-иконками:

В компонент Sprite.vue добавить разметку иконки и обернуть в тег symbol, задать ему id с приставкой "icon-".
Спрайт подключён в html, так что можно вставлять в любой компонент без импорта:
<svg-icon name="fire" />
Name — это пропс, id из symbol без приставки "icon-"

### Как работать со стилями:

Все стили лежат в /src/styles.
Каждый новый файл для компонента подключать в \_style.scss

### Как работать со шрифтами:

Все шрифты .woff/woff2 лежат в /src/assets/fonts.
Правила @font-face для них описаны в /src/styles/\_fonts.scss.
Шрифт по умолчанию это Roboto, он указан в переменной в файле \_vars.scss:
$font: "Roboto", sans-serif;
На какой бы другой его не заменили - в \_global.scss эта переменная
задана для всего body:
body {
font-family: $font;
}
