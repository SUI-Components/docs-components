#!/usr/bin/env node

const matchFileRoute = require('./utils/matchFileRoutes')

const main = (pattern = 'src/components/**/!(*.*).js') => {
  const files = matchFileRoute(undefined, pattern)
  files.forEach(file => process.stdout.write(`${file}\n`))
}

main(...process.argv.splice(2))
