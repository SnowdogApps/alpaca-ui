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

files.forEach(file => {
  const name = path.basename(file)
  fs.copyFileSync(`${root}/${file}`, `${dist}/${name}`)

  // Adjust import paths
  if (path.extname(file) === '.vue') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /\"\.\//gm,
          '"@snowdog/alpaca-components/'
        )
    )
  }

  if (path.extname(file) === '.js') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /(import\s\w+\sfrom)\s\'..\/..\/\S+\/\S+\/(\S+)\'/gm,
          `$1 '@snowdog/alpaca-components/$2'`
        )
    )
  }

  if (path.extname(file) === '.scss') {
    fs.writeFileSync(
      `${dist}/${name}`,
      fs.readFileSync(`${dist}/${name}`, 'utf8')
        .replace(
          /@import '~styles/gm,
          `@import '@snowdog/alpaca-components/styles`
        )
        .replace(
          /@import '\.\.\/\.\.\/\.\.\/assets\/styles/gm,
          `@import '@snowdog/alpaca-components/styles`
        )
    )
  }
})

// Copy package.json
fs.copyFileSync(`${root}/package.json`, `${dist}/package.json`)
