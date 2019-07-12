import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'

import AHeading from '../../atoms/heading/Heading.vue'
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AModal from './Modal.vue'

const availableTransitions = [
  'fade',
  'slide-up',
  'slide-right',
  'slide-down',
  'slide-left'
]

const data = {
  components: {
    AButton,
    AModal,
    AParagraph
  },
  data: () => ({
    isModalVisible: false
  }),
  methods: {
    openModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}

storiesOf('Molecules/Modal', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    ...data,
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    template: `
      <div>
        <a-button @click.native="openModal()">
          Modal button
        </a-button>
        <a-modal
          :heading="headingKnob"
          :visible="isModalVisible"
          @close="closeModal()"
          :modal-content-transition="contentTransitionKnob"
          close-button-aria-label="Close"
        >
          <a-paragraph>
            {{ contentKnob }}
          </a-paragraph>
        </a-modal>
      </div>
    `
  }))
  .add('Without close icon', () => ({
    ...data,
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    template: `
      <div>
        <a-button @click.native="openModal()">
          Modal button
        </a-button>
        <a-modal
          :heading="headingKnob"
          :visible="isModalVisible"
          :closeButton="false"
          @close="closeModal()"
          :modal-content-transition="contentTransitionKnob"
        >
          <a-paragraph>
            {{ contentKnob }}
          </a-paragraph>
        </a-modal>
      </div>
    `
  }))
  .add('Without header', () => ({
    ...data,
    props: {
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    template: `
      <div>
        <a-button @click.native="openModal()">
          Modal button
        </a-button>
        <a-modal
          :visible="isModalVisible"
          :closeButton="false"
          @close="closeModal()"
          :modal-content-transition="contentTransitionKnob"
        >
          <a-paragraph>
            {{ contentKnob }}
          </a-paragraph>
        </a-modal>
      </div>
    `
  }))
  .add('With slots', () => ({
    components: {
      AButton,
      ADivider,
      AIcon,
      AModal,
      AHeading
    },
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    data: () => ({
      isFirstModalVisible: false,
      isSecondModalVisible: false
    }),
    template: `
      <div>
        <a-button @click.native="isFirstModalVisible = true">
          Default Modal button
        </a-button>
        <a-button @click.native="isSecondModalVisible = true">
          Second Modal button
        </a-button>
        <a-modal
          :visible="isFirstModalVisible"
          :heading="headingKnob"
          @close="isFirstModalVisible = false"
          :modal-content-transition="contentTransitionKnob"
          close-button-aria-label="Close"
        >
          <template #heading="{ modalHeading }">
            <a-heading
              :level="1"
              class="a-modal__heading"
            >
              {{ modalHeading.toUpperCase() }}
            </a-heading>
            <a-divider
              class="a-modal__divider a-modal__divider--header"
              style="background-color: #393243;"
            />
          </template>
          <template #close>
            <a-icon
              icon="minus"
              class="a-modal__close-icon"
              title="Close"
            />
          </template>
          <p>{{ contentKnob }}</p>
        </a-modal>
        <a-modal
          :heading="headingKnob"
          :visible="isSecondModalVisible"
          @close="isSecondModalVisible = false"
          :modal-content-transition="contentTransitionKnob"
          close-button-aria-label="Close"
        >
          <template #heading="{ modalHeading }">
            <a-heading
              :level="1"
              class="a-modal__heading"
            >
              {{ modalHeading + ' II' }}
            </a-heading>
            <a-divider
              class="a-modal__divider a-modal__divider--header"
              style="background-color: #fab216;"
            />
          </template>
          <template #close>
            <a-icon
              icon="minus"
              class="a-modal__close-icon"
              title="Close"
            />
          </template>
          <p>{{ contentKnob.toUpperCase() }}</p>
        </a-modal>
      </div>
    `
  }))
