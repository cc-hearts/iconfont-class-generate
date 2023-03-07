const { resolve, join } = require('path')
const { existsSync } = require('fs')
const { genJson } = require('./lib/genJson')
const { writeFile } = require('./lib/write')
const { generatorIcon } = require('./lib/genClassName')
import { mkdirSync } from 'fs'
import type { IMap } from './lib/genJson.js'
const fileName = '.iconGenCode'

interface IconGenCode {
  iconList: string[]
}
interface IResult { [props: string]: string[] }
async function bootstrap() {
  const originPath = process.cwd();
  const suffix = ['js', 'cjs', 'mjs']
  const file = resolve(originPath, fileName)
  const ctx: IconGenCode | null | unknown = suffix.reduce((acc, cur) => {
    if (!acc) {
      const filePath = resolve(originPath, `${file}.${cur}`)
      if (existsSync(filePath)) {
        acc = require(filePath)
      }
    }
    return acc
  }, null)
  if (ctx === null) {
    throw new Error(`${fileName} not found`)
  }
  let iconList: IconGenCode['iconList'] = [];
  if (typeof ctx !== 'object' || !((iconList = Reflect.get(ctx, 'iconList')) instanceof Array)) {
    throw new Error('module exports is not a object and object has the iconList property on it')
  }

  const map: IMap = await genJson(iconList)
  const result: IResult = {}
  for (const [key, value] of map) {
    result[key] = [...value.values()]
  }

  const outDir = Reflect.get(ctx, 'outDir') || '/'
  const outDirPath = join(process.cwd(), outDir)
  if (!existsSync(outDirPath)) {
    mkdirSync(outDirPath, { recursive: true })
  }
  const iconFilePath = join(outDirPath, '.icon.json')
  writeFile(iconFilePath, JSON.stringify(result, null, 4))
}

module.exports = {
  bootstrap,
  generatorIcon
}

export { }