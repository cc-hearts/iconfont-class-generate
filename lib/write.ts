const { writeFileSync } = require('fs')
const { writeInspect } = require('./inspect')
function writeFile(filePath: string, content: string) {
  writeFileSync(filePath, content, 'utf8')
  writeInspect(filePath)
}

module.exports = {
  writeFile
}
export { }