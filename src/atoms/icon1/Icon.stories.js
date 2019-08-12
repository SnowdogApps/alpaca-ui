import { storiesOf } from '@storybook/vue'

import AIcon from './Icon.vue'
import AIconPerson from './templates/IconPerson.vue'
import AIconCheck from './templates/IconCheck.vue'
import AIconExpandMore from './templates/IconExpandMore.vue'
import AIconClose from './templates/IconClose.vue'
import AIconSearch from './templates/IconSearch.vue'

const wrapperStyles = {
  'margin': '20px',
  'width': '100px',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center'
}

storiesOf('Atoms/Icon1', module)
  .add('Default', () => ({
    components: {
      AIcon,
      AIconPerson,
      AIconCheck,
      AIconExpandMore,
      AIconClose,
      AIconSearch
    },
    data: () => ({ wrapperStyles }),
    template: `
      <div style="display: flex; flex-wrap: wrap; padding: 10px;">
        <div :style="wrapperStyles">
          <a-icon icon-title="Account">
            <a-icon-person />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            person
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Checked">
            <a-icon-check />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            check
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Expand more">
            <a-icon-expand-more />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            expand_more
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Close">
            <a-icon-close />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            close
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Search">
            <a-icon-search />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            search
          </span>
        </div>
      </div>
    `
  }))
