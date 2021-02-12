# Plugin solution

1. Plugin without options

## How it works:

* in `tailwing.config.js` we add plugin for components, declare classes and styles for it.
* using components, we add class, ex:
```html
<AButton class="btn btn--primary">
  Button
</AButton>
```
* we can use tailwing classes on component level, it overwrites styles declared in config, ex:
```html
<AButton class="btn btn--primary px-6">
  Button
</AButton>
```
class `px-6` overwrites `padding: `0 ${theme('spacing.4')}`,` declared in config
* using `@apply` on component level overwrites plugin styles (but it has priority before tailwing classes used on components), ex:
in `AButton.vue`:
```html
<template src="@snowdog/alpaca-ui/src/atoms/button/Button.html" />
<script src="@snowdog/alpaca-ui/src/atoms/button/Button.js" />
<style>
.btn--primary {
  @apply text-green;
}
</style>
```
using components in `pages/index.vue`:
```html
<AButton class="btn btn--primary text-blue">
  Button
</AButton>
```
button text color will be green.
* in custom theme, using plugin, styles for classes will be overwritten but styles from all plugins are generated (purge not checked)
