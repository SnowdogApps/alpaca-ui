const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')

const dist = path.resolve('./dist')
if (fs.existsSync(dist)) {
  fs.removeSync(dist)
}

fs.mkdirSync(dist)

fs.copySync('./assets/styles', `${dist}/styles`)

const files = glob.sync('src/*/*/*.{js,scss,html,vue}', {
  ignore: '**/*.stories.js'
})

files.forEach(file => {
  const name = path.basename(file)
  fs.copyFileSync(file, `${dist}/${name}`)
})
