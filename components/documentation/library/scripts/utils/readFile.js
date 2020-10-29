const fs = require('fs')
const path = require('path')

const readFile = (file, base = process.cwd()) => {
  let fileDirectory = file
  if (base !== false) {
    fileDirectory = path.join(base, file.replace(`${process.cwd()}/`, ''))
  }
  if (fs.existsSync(fileDirectory)) {
    return fs.readFileSync(fileDirectory, {flag: 'r', encoding: 'utf8'})
  }
  return undefined
}

module.exports = readFile
