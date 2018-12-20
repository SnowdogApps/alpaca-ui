<template>
  <div class="dropdown-list">
    <ul
      v-for="(element, i) in elements"
      :key="i"
      class="dropdown-list__list"
    >
      <li
        :class="['dropdown-list__item', element.listNested && 'dropdown-list__item--parent']"
      >
        <alpaca-link
          href="#"
          :custom-class="element.class"
          :data-dropdown="element.id"
          :aria-controls="element.id"
        >
          {{ element.title }}
          <alpaca-icon
            v-if="element.collapse"
            :icon="element.collapse.iconId"
            :class="element.collapse.class"
          />
        </alpaca-link>
        <ul
          v-if="element.listNested"
          :id="element.listNested.id"
          class="dropdown-list__inner-list dropdown-list__inner-list--level1"
          :data-dropdown="element.listNested.id"
          aria-hidden="true"
        >
          <li
            v-for="(el, index) in element.listNested"
            :key="index"
            :class="['dropdown-list__inner-item',
                     'dropdown-list__inner-item--level1',
                     el.sublist && 'dropdown-list__inner-item--parent'
            ]"
          >
            <alpaca-link
              href="#"
              :class="['dropdown-list__inner-label', el.class]"
              :data-dropdown="el.id"
            >
              {{ el.itemName }}
              <alpaca-icon
                v-if="el.collapse"
                :icon="el.collapse.iconId"
                :class="el.collapse.class"
              />
            </alpaca-link>
            <ul
              v-if="el.sublist"
              :id="el.sublist.id"
              class="dropdown-list__inner-list dropdown-list__inner-list--level2"
              :data-dropdown="el.sublist.id"
              aria-hidden="true"
            >
              <li
                v-for="(sub, ind) in el.sublist"
                :key="ind"
                class="dropdown-list__inner-item dropdown-list__inner-item--level2"
              >
                <alpaca-link
                  href="#"
                  :class="['dropdown-list__inner-label', sub.class]"
                >
                  {{ sub.itemName }}
                </alpaca-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import AlpacaLink from '../../01-globals/link/Link.vue'
  import AlpacaIcon from '../../01-globals/icon/Icon.vue'

  export default {
    components: {
      AlpacaLink,
      AlpacaIcon
    },
    props: {
      elements: {
        type: Array,
        required: true
      }
    }
  }
</script>
