const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')

const components = glob
  .sync('src/{atoms,molecules,organisms,pages,templates}/*/*.vue', { cwd: path.resolve(__dirname, '../') })
  .map(file => ({
    src: file,
    name: path.basename(file)
  }))

// Create main file with imports and exports of all components
fs.writeFileSync(
  `./index.js`,
  components.map(component => {
    const name = component.name.replace(/\.\w+/, '')
    return `export { default as ${name} } from './${component.src}'`
  }).join('\n')
)
