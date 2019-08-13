import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number, color } from '@storybook/addon-knobs'

import ARating from './Rating.vue'
import AIcon from '../../atoms/icon1/Icon.vue'
import AIconClose from '../../atoms/icon1/templates/IconClose.vue'
import AIconCheck from '../../atoms/icon1/templates/IconCheck.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ARating },
    methods: {
      select: action('Selected')
    },
    props: {
      activeColor: {
        default: color('Active color', '#fab216')
      },
      uncheckedColor: {
        default: color('Unchecked color', '#c9c9c9')
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 5)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :active-color="activeColor"
        :unchecked-color="uncheckedColor"
        @select="select"
      />
    `
  }))
  .add('Read only', () => ({
    components: { ARating },
    props: {
      uncheckedColor: {
        default: color('Unchecked color', '#c9c9c9')
      },
      activeColor: {
        default: color('Active icon', '#d42343')
      },
      average: {
        default: number('Average', 3.4)
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 6)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :unchecked-color="uncheckedColor"
        :active-color="activeColor"
        :average="average"
      />
    `
  }))
  .add('With custom icons', () => ({
    components: { ARating, AIcon, AIconClose, AIconCheck },
    methods: {
      select: action('Selected')
    },
    props: {
      activeColor: {
        default: color('Active color', '#39FD56')
      },
      uncheckedColor: {
        default: color('Unchecked color', '#E02020')
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 5)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :active-color="activeColor"
        :unchecked-color="uncheckedColor"
        @select="select"
      >
        <template #customIcon>
          <a-icon :title="iconTitle">
            <a-icon-check />
          </a-icon>
        </template>
        <template #customUncheckedIcon>
          <a-icon :title="iconTitle">
            <a-icon-close />
          </a-icon>
        </template>
      </a-rating>
    `
  }))
  .add('With slot', () => ({
    components: { ARating },
    props: {
      numberOfRatingKnob: {
        default: number('Number of rating', 3)
      }
    },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-rating :items="numberOfRatingKnob">
        <template #item="data">
          <svg
            @click="click(data.item)"
            class="icon"
            role="img"
            :style="[(data.item.isActive || data.item.selected) && {fill: 'red'}, {width: '24px', height: '24px'}]"
          >
            <title>heart</title>
            <use xlink:href="/assets/icons/sprite.svg#heart" />
          </svg>
        </template>
      </a-rating>
    `
  }))
