const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')

const root = path.resolve(__dirname, '../components')

const dist = path.join(root, 'dist')

// Remove old build
if (fs.existsSync(dist)) {
  fs.removeSync(dist)
}

// Create empty directory for new build
fs.mkdirSync(dist)

// Copy assets
glob.sync('*', { cwd: root + '/assets' }).forEach(dir => {
  fs.copySync(`${root}/assets/${dir}`, `${dist}/${dir}`)
})

// Add SCSS import that allow customizations
const globalsPath = `${dist}/styles/_globals.scss`
const globals = fs.readFileSync(globalsPath, 'utf8')
fs.writeFileSync(globalsPath, `@import '../../../../../alpaca';\n` + globals)

// Copy components source files
const files = glob.sync('src/*/*/*.{js,scss,html,vue}', {
  ignore: '**/*.stories.js',
  cwd: root
})

// List of Vue components
const components = []

// Adjust import paths to point to npm package
files.forEach(file => {
  const name = path.basename(file)
  fs.copyFileSync(`${root}/${file}`, `${dist}/${name}`)

  // Adjust import paths
  if (path.extname(file) === '.vue') {
    components.push(name)

    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /\"\S+\/(\S+)\"/gm,
          '"@snowdog/alpaca-components/dist/$1"'
        )
    )
  }

  if (path.extname(file) === '.js') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /(import\s\w+\sfrom)\s(?:\'|\")\S+\/(\S+)(?:\'|\")/gm,
          `$1 '@snowdog/alpaca-components/dist/$2'`
        )
    )
  }

  if (path.extname(file) === '.scss') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /@import '\.\.\/\.\.\/\.\.\/assets\/styles/gm,
          `@import '@snowdog/alpaca-components/dist/styles`
        )
    )
  }
})

// Create main file with imports and exports of all components
fs.writeFileSync(
  `${dist}/index.js`,
  components.map(component => {
    const name = component.replace(/\.\w+/, '')
    return `export { default as ${name} } from './${component}'`
  }).join('\n')
)
