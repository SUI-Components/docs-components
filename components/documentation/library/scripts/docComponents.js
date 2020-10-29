#!/usr/bin/env node

const getComponentDocs = require('./utils/getComponentDocs')
const renderTemplate = require('./utils/renderTemplate')
const readFile = require('./utils/readFile')
const writeFile = require('./utils/writeFile')
const pkg = require('../package')

const stdin = process.openStdin()
stdin.setEncoding('utf8')

const data = []
stdin.on('data', chunk => {
  chunk
    .split('\n')
    .filter(d => d !== '')
    .forEach(file => data.push(file))
})
stdin.on('end', function() {
  main(data, true)
})

const main = (componentRoutes, genReadme = false) => {
  if (componentRoutes.length > 0) {
    const components = []
    componentRoutes.forEach(componentRoute => {
      Object.entries(getComponentDocs(componentRoute)).map(
        ([componentDisplayName, {template, component, key, filePath}]) => {
          components.push({key, component, filePath})
          const docFileName = `${componentRoute
            .split('/')
            .slice(0, -1)
            .join('/')}/${componentDisplayName}.md`
          writeFile(docFileName, template)
        }
      )
    })
    if (genReadme) {
      readFile('./scripts/templates/README.md.sqrl')
      writeFile(
        './README.md',
        renderTemplate(readFile('./scripts/templates/README.md.sqrl'), {
          package: pkg,
          components
        })
      )
    }
  }
}

main(process.argv.splice(2))
