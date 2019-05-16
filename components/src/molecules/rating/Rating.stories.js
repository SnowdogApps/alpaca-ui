import { storiesOf } from '@storybook/vue'

import ARating from './Rating.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="4"
        icon-border="star-border"
      />
    `
  }))
  .add('With custom ikon and color', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="4"
        icon="heart"
        color="red"
      />
    `
  }))
  .add('With custom ikon and no border', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="4"
        color="red"
      />
    `
  }))
  .add('Disabled', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="4"
        color="red"
        :average="2.5"
      />
    `
  }))
