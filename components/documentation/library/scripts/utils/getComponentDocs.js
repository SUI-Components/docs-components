const getComponentDocGen = require('./getComponentDocGen')
const renderTemplate = require('./renderTemplate')
const readFile = require('./readFile')

const pkg = require('../../package')
const componentDocTemplate = readFile(
  './scripts/templates/COMPONENT_NAME.md.sqrl',
  false
)

const getComponentDocs = filePath => {
  const componentSrc = readFile(filePath)
  const key = filePath
    .split('/')
    .slice(-1)[0]
    .replace('.js', '')
  const docGen = getComponentDocGen(componentSrc)
  return Object.fromEntries(
    docGen.map(componentDocGen => {
      return [
        componentDocGen.displayName,
        {
          template: renderTemplate(componentDocTemplate, {
            component: componentDocGen,
            key,
            package: pkg
          }),
          component: componentDocGen,
          key,
          filePath
        }
      ]
    })
  )
}

module.exports = getComponentDocs
