const { logger } = require('@cc-heart/utils')
function writeInspect(path: string) {
  logger.success(`file create success:${path}`)
}


module.exports = {
  writeInspect
}
export { }