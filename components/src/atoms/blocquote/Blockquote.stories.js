import { storiesOf } from '@storybook/vue'

import ABlockquote from './Blockquote.vue'

const info = `
  This component does not have any modifiers.
`

storiesOf('Atoms/Blockquote', module)
  .add('Default', () => ({
    components: { ABlockquote },
    template: `
      <a-blockquote>
        Qui quis labore ad laborum laborum ipsum veniam sunt. Laboris tempor id ut commodo aute incididunt consequat esse aute irure. Et irure elit veniam proident non do commodo labore cillum irure laborum ullamco nostrud.
      </a-blockquote>
    `
    }),
    { info }
  )
  .add('Custom tag', () => ({
    components: { ABlockquote },
    template: `
      <a-blockquote tag="span">
        Ipsum consequat do eiusmod irure dolor labore mollit commodo. Culpa eu Lorem fugiat incididunt velit incididunt reprehenderit quis do anim culpa. Proident aute incididunt non anim. Est aute laborum aliquip duis. Deserunt velit velit veniam reprehenderit laboris cupidatat cupidatat elit. Ad duis est tempor consequat incididunt.
      </a-blockquote>
    `
    }),
    { info }
  )
