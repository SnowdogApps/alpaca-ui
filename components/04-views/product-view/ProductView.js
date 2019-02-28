import breadcrumbs from '../../02-elements/breadcrumbs/mocks/breadcrumbs.json'
import gallery from '../../03-modules/gallery/mocks/gallery.json';

import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaGallery from '../../03-modules/gallery/Gallery.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaBreadcrumbs,
    AlpacaGallery
  },
  data() {
    return {
      breadcrumbs,
      gallery
    }
  }
}
