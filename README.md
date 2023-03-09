# icon class generate

Parse the css (for example iconfont) of the third-party library to generate the class class name


## install

```shell
npm install @cc-heart/icon-class-generate
```

## Usage

- Create a `.iconrc.js` file in the root directory

Add the following configuration
```js
module.exports = {
  iconList: ['https://at.alicdn.com/t/c/font_3590164_vc3wep8wbzf.css'],
  outDir: '/icon'
}
```

- Create a `js` file(for example,js file name is `genIcon.js`) that runs to generate the icon class
```js
const { bootstrap } = require('@cc-heart/icon-class-generate');
bootstrap()
```
Run the `js` file
```shell
node  genIcon.js
```

An `icon.json` file lives in the specified `outdir` file directory
```json
{
    "acade-1": [
        "acade-1 icon-wangluokecheng"
    ]
}
```