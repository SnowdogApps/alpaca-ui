import AIcon from './Icon.vue'
import AIconArrowLeft from './templates/IconArrowLeft.vue'
import AIconArrowRight from './templates/IconArrowRight.vue'
import AIconPerson from './templates/IconPerson.vue'
import AIconCheck from './templates/IconCheck.vue'
import AIconExpandMore from './templates/IconExpandMore.vue'
import AIconExpandLess from './templates/IconExpandLess.vue'
import AIconAngleLeft from './templates/IconAngleLeft.vue'
import AIconAngleRight from './templates/IconAngleRight.vue'
import AIconClose from './templates/IconClose.vue'
import AIconSearch from './templates/IconSearch.vue'
import AIconFavorite from './templates/IconFavorite.vue'
import AIconFavoriteBorder from './templates/IconFavoriteBorder.vue'
import AIconCompare from './templates/IconCompare.vue'
import AIconEqualizer from './templates/IconEqualizer.vue'
import AIconYoutube from './templates/IconYoutube.vue'
import AIconDelete from './templates/IconDelete.vue'
import AIconRemove from './templates/IconRemove.vue'
import AIconAdd from './templates/IconAdd.vue'
import AIconStar from './templates/IconStar.vue'
import AIconStarBorder from './templates/IconStarBorder.vue'
import AIconShoppingCart from './templates/IconShoppingCart.vue'
import AIconGrid from './templates/IconGrid.vue'
import AIconList from './templates/IconList.vue'
import AIconEdit from './templates/IconEdit.vue'
import AIconShare from './templates/IconShare.vue'
import AIconPhone from './templates/IconPhone.vue'
import AIconEnvelope from './templates/IconEnvelope.vue'
import AIconMobileMenu from './templates/IconMobileMenu.vue'
import AIconVisibility from './templates/IconVisibility.vue'
import AIconVisibilityOff from './templates/IconVisibilityOff.vue'
import AIconUnchecked from './templates/IconUnchecked.vue'
import AIconChecked from './templates/IconChecked.vue'
import AIconFacebook from './templates/IconFacebook.vue'
import AIconTwitter from './templates/IconTwitter.vue'
import AIconThumbUp from './templates/IconThumbUp.vue'
import AIconThumbDown from './templates/IconThumbDown.vue'
import AIconMore from './templates/IconMore.vue'
import AIconAttention from './templates/IconAttention.vue'
import AIconOk from './templates/IconOk.vue'
import AIconError from './templates/IconError.vue'

import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  title: 'Atoms/Icon',
  component: AIcon
}

const Template = () => ({
  components: {
    AIcon,
    AIconArrowLeft,
    AIconArrowRight,
    AIconPerson,
    AIconCheck,
    AIconExpandMore,
    AIconExpandLess,
    AIconAngleLeft,
    AIconAngleRight,
    AIconClose,
    AIconSearch,
    AIconFavorite,
    AIconFavoriteBorder,
    AIconCompare,
    AIconEqualizer,
    AIconYoutube,
    AIconDelete,
    AIconRemove,
    AIconAdd,
    AIconStar,
    AIconStarBorder,
    AIconShoppingCart,
    AIconGrid,
    AIconList,
    AIconEdit,
    AIconShare,
    AIconPhone,
    AIconEnvelope,
    AIconMobileMenu,
    AIconVisibility,
    AIconVisibilityOff,
    AIconUnchecked,
    AIconChecked,
    AIconFacebook,
    AIconTwitter,
    AIconThumbUp,
    AIconThumbDown,
    AIconMore,
    AIconAttention,
    AIconOk,
    AIconError
  },
  template: `
    <div class="flex flex-wrap">
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Arrow Left icon">
          <a-icon-arrow-left />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          arrow_left
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Arrow Right icon">
          <a-icon-arrow-right />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          arrow_right
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Add icon">
          <a-icon-add />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          add
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Remove icon">
          <a-icon-remove />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          remove
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Check icon">
          <a-icon-check />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          check
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Close icon">
          <a-icon-close />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          close
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Delete icon">
          <a-icon-delete />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          delete
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Equalizer icon">
          <a-icon-equalizer />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          equalizer
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Expand more icon">
          <a-icon-expand-more />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          expand_more
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Expand less icon">
          <a-icon-expand-less />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          expand_less
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Angle left">
          <a-icon-angle-left />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          angle_left
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Angle right">
          <a-icon-angle-right />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          angle_right
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Account icon">
          <a-icon-person />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          person
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Search icon">
          <a-icon-search />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          search
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Favorite icon">
          <a-icon-favorite />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          favorite
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Favorite border icon">
          <a-icon-favorite-border />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          favorite_border
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
      <a-icon title="Compare icon">
          <a-icon-compare />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          favorite_border
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Star icon">
          <a-icon-star />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          star
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Star border icon">
          <a-icon-star-border />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          star_border
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Grid icon">
          <a-icon-grid />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          grid
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="List icon">
          <a-icon-list />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          list
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Shopping cart icon">
          <a-icon-shopping-cart />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          shooping_cart
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Edit icon">
          <a-icon-edit />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          edit
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Share icon">
          <a-icon-share />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          share
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Phone icon">
          <a-icon-phone />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          phone
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Envelope icon">
          <a-icon-envelope />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          envelope
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Mobile menu icon">
          <a-icon-mobile-menu />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          mobile menu
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Visibility icon">
            <a-icon-visibility />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          visibility
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Visibility off icon">
          <a-icon-visibility-off />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          visibility
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Unchecked icon">
          <a-icon-unchecked />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          unchecked
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Checked icon">
          <a-icon-checked />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          checked
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Youtube icon">
          <a-icon-youtube />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          youtube
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Facebook icon">
          <a-icon-facebook />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          facebook
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Twitter icon">
          <a-icon-twitter />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          twitter
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Thumb up icon">
          <a-icon-thumb-up />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          thumb_up
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Thumb down icon">
          <a-icon-thumb-down />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          thumb_down
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="More icon">
          <a-icon-more />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          more
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Attention icon">
          <a-icon-attention />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          attention
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Ok icon">
          <a-icon-ok />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          ok
        </span>
      </div>
      <div
        class="
          flex flex-col items-center
          m-5 w-24
        "
      >
        <a-icon title="Error icon">
          <a-icon-error />
        </a-icon>
        <span
          class="
            mt-5
            text-center
          "
        >
          error
        </span>
      </div>
    </div>
  `
})

export const Default = Template.bind({})
