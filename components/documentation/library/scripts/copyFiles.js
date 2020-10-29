#!/usr/bin/env node
const {serialSpawn} = require('@s-ui/helpers/cli')

const matchFileRoute = require('./utils/matchFileRoutes')

module.exports = (...args) => serialSpawn([['git add', [...args]]])

const main = (pattern, replaceStringTarget, replaceStringResult) => {
  const files = matchFileRoute(undefined, pattern)
  files.forEach(file => {
    serialSpawn([
      ['cp', [file, file.replace(replaceStringTarget, replaceStringResult)]]
    ])
  })
}

main(...process.argv.splice(2))
