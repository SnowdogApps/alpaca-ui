import { addDecorator, storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import items from './mocks/dropdownListItems.json'

const info = `
  ---
  #### Use these modifiers with \`.dropdown-list\` class.
  - \`.dropdown-list--dark\` - Selector for applying dark styles
  - \`.dropdown-list--secondary\` - Selector for applying secondary styles
  - \`.dropdown-list--inner\` - Selector for applying inner styles
  - \`.dropdown-list@screen-m dropdown-list--is-open@screen-m\` - Selector for applying styles for smaller resolution
  ---
`
addDecorator(StoryRouter())
storiesOf('Molecules/Dropdown List', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list>
          <span>test</span>
        </a-dropdown-list>
      `
    })
  )
  // .add(
  //   'Nested with items as props',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list :items="dropdownListItemsNested" />
  //     `
  //   })
  // )
  // .add(
  //   'Screen M',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list
  //         class="dropdown-list@screen-m dropdown-list--is-open@screen-m"
  //         :items="dropdownListItems"
  //       />
  //     `
  //   })
  // )
  // .add(
  //   'Dark',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list
  //         class="dropdown-list--dark"
  //         :items="dropdownListItems"
  //       />
  //     `
  //   })
  // )
  // .add(
  //   'Secondary',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list
  //         class="dropdown-list--secondary"
  //         :items="dropdownListItems"
  //       />
  //     `
  //   })
  // )
  // .add(
  //   'Inner',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list
  //         class="dropdown-list--inner"
  //         :items="dropdownListItems"
  //       />
  //     `
  //   })
  // )
  // .add(
  //   'With slots',
  //   () => ({
  //     data: () => ({
  //       ...items
  //     }),
  //     template: `
  //       <a-dropdown-list>
  //         <template v-for="element in dropdownListItems">
  //           <a-dropdown-list-item
  //             v-if="element.content"
  //             :key="element.id"
  //             :collapse="true"
  //             :id="element.id"
  //           >
  //             <template #title>
  //               <span style="color: #613d7c">
  //                 {{ element.title}}
  //               </span>
  //             </template>
  //             {{element.content}}
  //            </a-dropdown-list-item>
  //           <a-dropdown-list-link
  //             v-else
  //             :key="element.id"
  //           >
  //             <template #content>
  //               <a
  //                 style="marginLeft: 15px;"
  //                 :href="element.href"
  //               >
  //                 {{ element.title }}
  //               </a>
  //             </template>
  //           </a-dropdown-list-link>
  //         </template>
  //       </a-dropdown-list>
  //     `
  //   })
  // )
