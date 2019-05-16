import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARating from './Rating.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="5"
        unchecked-icon="star-border"
      />
    `
  }))
  .add('With custom ikon and no border', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="4"
        active-color="red"
        active-icon="heart"
        @select="select"
      />
    `,
    methods: {
      select: action('Selected')
    }
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
    `,
    methods: {
      click: action('Clicked')
    }
  }))
