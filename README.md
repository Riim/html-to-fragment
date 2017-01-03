# html-to-fragment

Convert html string to document fragment.

## Install

```
npm install html-to-fragment --save
```

## Usage

```js
import htmlToFragment from 'html-to-fragment';
// or `var htmlToFragment = require('html-to-fragment').default;`

let df = htmlToFragment('<div>div</div><span>span</span>');

document.body.appendChild(df);
```
