import { storiesOf } from '@storybook/vue'

import AIcon from './Icon.vue'
import AIconPerson from './templates/IconPerson.vue'
import AIconCheck from './templates/IconCheck.vue'
import AIconExpandMore from './templates/IconExpandMore.vue'
import AIconClose from './templates/IconClose.vue'
import AIconSearch from './templates/IconSearch.vue'
import AIconFavoriteBorder from './templates/IconFavoriteBorder.vue'
import AIconEqualizer from './templates/IconEqualizer.vue'
import AIconYoutube from './templates/IconYoutube.vue'
import AIconDelete from './templates/IconDelete.vue'
import AIconRemove from './templates/IconRemove.vue'
import AIconAdd from './templates/IconAdd.vue'
import AIconStar from './templates/IconStar.vue'
import AIconStarBorder from './templates/IconStarBorder.vue'

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
      AIconSearch,
      AIconFavoriteBorder,
      AIconEqualizer,
      AIconYoutube,
      AIconDelete,
      AIconRemove,
      AIconAdd,
      AIconStar,
      AIconStarBorder
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
        <div :style="wrapperStyles">
          <a-icon icon-title="Favorite icon">
            <a-icon-favorite-border />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            favorite_border
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Equalizer icon">
            <a-icon-equalizer />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            equalizer
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Delete icon">
            <a-icon-delete />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            delete
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Remove icon">
            <a-icon-remove />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            remove
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Add icon">
            <a-icon-add />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            add
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Youtube icon">
            <a-icon-youtube />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            youtube
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Star icon">
            <a-icon-star />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            star
          </span>
        </div>
        <div :style="wrapperStyles">
          <a-icon icon-title="Star border icon">
            <a-icon-star-border />
          </a-icon>
          <span style="display: block; margin-top: 20px; text-align: center;">
            star_border
          </span>
        </div>
      </div>
    `
  }))
