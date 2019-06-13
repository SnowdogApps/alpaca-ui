<p align="center">
  <img src="https://alpaca-ui.now.sh/assets/icons/alpaca.svg" alt="Alpaca logo" height="100" />
</p>
<br/>


## Alpaca UI

[![CircleCI](https://circleci.com/gh/SnowdogApps/alpaca-ui/tree/develop.svg?style=svg)](https://circleci.com/gh/SnowdogApps/alpaca-ui/tree/develop)

[![npm version](https://badge.fury.io/js/%40snowdog%2Falpaca-ui.svg)](https://www.npmjs.com/package/@snowdog/alpaca-ui)

Highly customizable library of responsive UI components crafted for e-commerce. It is based on Vue.js and Alpaca design system.

> ⚠️ This library is currently in an early stage. Expect things to be broken or APIs to change as this project matures. DO NOT USE IT IN PRODUCTION!

## Getting Started

### Installation 

Install Alpaca-UI using yarn
```bash
yarn add @snowdog/alpaca-ui
```

or npm
```bash
npm install @snowdog/alpaca-ui
```

### Usage

Import component in your app using named imports:

`import { AButton } from '@snowdog/alpaca-ui'`

```vue
<template>
  <a-button type="button">
    Alpaca button
  </a-button>
</template>

<script>
import { AButton } from '@snowdog/alpaca-ui'

export default {
  name: 'MyComponent',
  components: AButton
}
</script>
```

If you need more flexibility you can take the source:

```vue
<template src="@snowdog/alpaca-ui/src/atoms/button/Button.html" />

<script>
import Button from '@snowdog/alpaca-ui/src/atoms/button/Button.js'

export default {
  mixins: [Button]
}
</script>

<style src="@snowdog/alpaca-ui/src/atoms/button/Button.scss" lang="scss" /> 
```
For now, to see all possible cases/modifiers, you should clone and run repo as in Development point, or check .stories.js file in component.

## Features

- High customization and performance
- Possibility to override global variables
- Possibility to override components from partials (HTML/JS/SCSS)
- Semantic and accessible code output
- Ready to use with Vue CLI, Vue Storefornt and Nuxt.js

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera, Safari and IE11+.

## Contributing

Read our contributing guide and let's build a better components together.
We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/SnowdogApps/alpaca-ui/blob/develop/CONTRIBUTING.md) first. You can submit any ideas as GitHub issues.

## Development

```bash
git clone git@github.com:SnowdogApps/alpaca-ui.git
cd alpaca-ui
yarn
yarn dev
```

Open your browser, visit http://127.0.0.1:6006 and have fun.

## Cooperation with Storefront UI

Ideas behind Alpaca UI and [Storefront UI](https://github.com/DivanteLtd/storefront-ui/) are common efforts. We share almost identical configuration and API so you can easily switch between these two ones. [SNOW.DOG](https://snow.dog) and [Divante](https://divante.co) joined forces in figuring out how to make things right to deliver the best possible experience to the users.

## License

Code released under MIT license.
Copyright (c), [SNOW.DOG](https://snow.dog).
