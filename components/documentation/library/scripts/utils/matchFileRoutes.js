const fs = require('fs')
const path = require('path')
const minimatch = require('minimatch')

const matchFileRoutes = (
  base = process.cwd(),
  minimatchPattern,
  accomulator
) => {
  const files = fs.readdirSync(base)
  let result = accomulator || []

  files.forEach(function(file) {
    const newBase = path.join(base, file)
    if (fs.statSync(newBase).isDirectory()) {
      result = matchFileRoutes(newBase, minimatchPattern, result)
    } else {
      minimatch(newBase.replace(`${process.cwd()}/`, ''), minimatchPattern) &&
        result.push(newBase)
    }
  })
  return result
}

module.exports = matchFileRoutes
