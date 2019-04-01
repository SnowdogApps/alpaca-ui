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

// Copy components source files
const files = glob.sync('src/*/*/*.{js,scss,html,vue}', {
  ignore: '**/*.stories.js',
  cwd: root
})

const components = []

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
          /\"\.\//gm,
          '"@snowdog/alpaca-components/dist'
        )
    )
  }

  if (path.extname(file) === '.js') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /(import\s\w+\sfrom)\s(?:\'|\")..\/..\/\S+\/\S+\/(\S+)(?:\'|\")/gm,
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

const imports = components.map(component => {
  const name = component.replace(/\.\w+/, '')
  return `import ${name} from './${component}'`
}).join('\n')

const names = components
  .map(component => component.replace(/\.\w+/, ''))
  .join(',\n  ')

const file = `
${imports}

export default {
  ${names}
}
`

fs.writeFileSync(`${dist}/index.js`, file)
