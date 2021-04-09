const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')

const components = glob
  .sync('src/*/*/*.vue', { cwd: path.resolve(__dirname, '../') })
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

let defaultConfig = {}
glob.sync('src/*/*/*.config.js', { cwd: path.resolve(__dirname, '../') })
  .map(file => {
    defaultConfig = { ...defaultConfig, ...require(`../${file}`) }
  })

fs.writeFileSync(
  './default.config.js',
  `module.exports = ${JSON.stringify(defaultConfig, null, 2)}`,
  'utf-8'
)
