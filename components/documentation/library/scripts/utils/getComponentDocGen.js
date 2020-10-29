const reactDocs = require('react-docgen')

const getComponentDocGen = componentSrc =>
  reactDocs.parse(componentSrc, reactDocs.resolver.findAllComponentDefinitions)

module.exports = getComponentDocGen
