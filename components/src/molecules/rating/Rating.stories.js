import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARating from './Rating.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { ARating },
    methods: {
      select: action('Selected')
    },
    template: `
      <a-rating
        :items="5"
        unchecked-icon="star-border"
        @select="select"
      />
    `
  }))
  .add('With custom elements', () => ({
    components: { ARating },
    methods: {
      select: action('Selected')
    },
    template: `
      <a-rating
        :items="4"
        active-color="red"
        active-icon="heart"
        @select="select"
      />
    `
  }))
  .add('Read only', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="6"
        active-color="green"
        unchecked-icon="star-border"
        :average="3.6"
      />
    `
  }))
  .add('With slot', () => ({
    components: { ARating },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-rating
        :items="3"
      >
        <template #item="data">
          <button
            style="background: none;"
            @click="click(data.item)"
          >
            {{ data.item.val }}
          </button>
        </template>
      </a-rating>
    `
  }))
