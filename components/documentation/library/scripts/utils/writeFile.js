const fs = require('fs')
const path = require('path')

const writeFile = (file, data, base = process.cwd()) => {
  const fileDirectory = path.join(base, file.replace(`${process.cwd()}/`, ''))
  return fs.writeFileSync(fileDirectory, data)
}

module.exports = writeFile
