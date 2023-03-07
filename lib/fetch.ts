const { request } = require('https')
const { URL } = require('url')
import type { IncomingMessage } from 'http'

function fetchCssResource(path: string) {
  return new Promise((resolve, reject) => {
    const options = new URL(path)
    let data = ''
    const req = request(options, (res: IncomingMessage) => {
      res.setEncoding('utf8')

      res.on('data', (chunk: Buffer) => {
        data += chunk.toString()
      })

      res.on('end', () => {
        resolve(data)
      })

      res.on('error', (err: Error) => {
        reject(err)
      })
    })
    req.end()
  })
}

module.exports = {
  fetchCssResource
}
export { }