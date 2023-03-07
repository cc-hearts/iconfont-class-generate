const { fetchCssResource } = require('./fetch')
const { generatorIcon } = require('./genClassName')
export type IMap = Map<string, Set<string>>
function genJson(iconList: string[]): Promise<IMap> {
  return new Promise((resolve) => {
    let count = 0;
    iconList.reduce((acc, iconPath) => {
      fetchCssResource(iconPath).then((iconContent: string) => {
        const [prefix, classNames] = generatorIcon(iconContent)
        console.log(prefix, classNames);
        if (!acc.has(prefix)) {
          acc.set(prefix, new Set())
        }
        classNames.forEach((className: string) => acc.get(prefix)?.add(className))
        count++
        if (count === iconList.length) resolve(acc)
      })
      return acc
    }, new Map<string, Set<string>>())
  })
}


module.exports = {
  genJson
}

export { }