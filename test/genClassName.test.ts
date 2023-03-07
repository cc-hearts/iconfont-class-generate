const { generatorIcon } = require('../lib/genClassName')
describe('code generator icon font className', () => {
  it('should generate acade-1 className List', () => {
    const file = `
    @font-face {
      font-family: "acade-1";
      /* Project id 3888777 */
      /* Color fonts */
      src:
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.woff2?t=1675994200335') format('woff2'),
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.woff?t=1675994200335') format('woff'),
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.ttf?t=1675994200335') format('truetype');
    }

    .acade-1 {
      font-family: "acade-1" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-wangluokecheng:before {
      content: "e6b4";
    }
    `
    expect(generatorIcon(file)).toEqual(['acade-1', ['acade-1 icon-wangluokecheng']]);
  })

  it('should throw an error when file is empty', () => {
    const file = ''
    expect(() => generatorIcon(file)).toThrow('prefix match error')
  })

  it('should generate a empty array when className is empty', () => {
    const file = `
    @font-face {
      font-family: "acade-1";
      /* Project id 3888777 */
      /* Color fonts */
      src:
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.woff2?t=1675994200335') format('woff2'),
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.woff?t=1675994200335') format('woff'),
        url('//at.alicdn.com/t/c/font_3888777_2gm7zu04pg7.ttf?t=1675994200335') format('truetype');
    }

    .acade-1 {
      font-family: "acade-1" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `
    expect(generatorIcon(file)).toEqual(['acade-1', []])
  })
})


export { }