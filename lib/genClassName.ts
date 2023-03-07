
function generatorIcon(data: string) {
  const reg = /font-family:\s*"(.*?)"/
  let prefix = ''
  if (reg.test(data)) {
    prefix = RegExp.$1
  }
  if (!prefix) {
    throw new Error('prefix match error')
  }
  const regClass = /\.(.*?)(?=:)/gm
  let icons: RegExpMatchArray | string[] = data.match(regClass) || []
  icons = icons.map((val) => val.replace('.', `${prefix} `))
  return [prefix, icons]
}

module.exports = {
  generatorIcon
}
export { }