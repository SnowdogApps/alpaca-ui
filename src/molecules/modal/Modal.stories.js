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
  'slide-down',
  'slide-right'
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
      this.$nextTick(() => this.$refs.modal.$el.focus())
    },
    closeModal () {
      this.isModalVisible = false
      this.$nextTick(() => this.$refs.modalTriggerBtn.$el.focus())
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
        <a-button
          ref="modalTriggerBtn"
          @click.native="openModal()"
        >
          Modal button
        </a-button>
        <a-modal
          :heading="headingKnob"
          :visible="isModalVisible"
          ref="modal"
          @close="closeModal()"
          :modalContentTransition="contentTransitionKnob"
          closeButtonAriaLabel="Close"
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
        <a-button
          ref="modalTriggerBtn"
          @click.native="openModal()"
        >
          Modal button
        </a-button>
        <a-modal
          :heading="headingKnob"
          :visible="isModalVisible"
          :closeButton="false"
          ref="modal"
          @close="closeModal()"
          :modalContentTransition="contentTransitionKnob"
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
        <a-button
          ref="modalTriggerBtn"
          @click.native="openModal()"
        >
          Modal button
        </a-button>
        <a-modal
          :visible="isModalVisible"
          :closeButton="false"
          ref="modal"
          @close="closeModal()"
          :modalContentTransition="contentTransitionKnob"
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
    methods: {
      triggerFocus (ref) {
        this.$nextTick(() => this.$refs[ref].$el.focus())
      },
      toggleModalState (name) {
        switch (name) {
          case 'firstModal':
            this.isFirstModalVisible = !this.isFirstModalVisible
            break
          case 'secondModal':
            this.isSecondModalVisible = !this.isSecondModalVisible
            break
        }
      },
      openModal (name) {
        this.toggleModalState(name)
        this.triggerFocus(name)
      },
      closeModal (name) {
        this.toggleModalState(name)
        this.triggerFocus(`${name}Btn`)
      }
    },
    template: `
      <div>
        <a-button
          ref="firstModalBtn"
          @click.native="openModal('firstModal')"
        >
          Default Modal button
        </a-button>
        <a-button
          ref="secondModalBtn"
          @click.native="openModal('secondModal')"
        >
          Second Modal button
        </a-button>
        <a-modal
          :visible="isFirstModalVisible"
          :heading="headingKnob"
          ref="firstModal"
          @close="closeModal('firstModal')"
          :modalContentTransition="contentTransitionKnob"
          closeButtonAriaLabel="Close"
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
          ref="secondModal"
          @close="closeModal('secondModal')"
          :modalContentTransition="contentTransitionKnob"
          closeButtonAriaLabel="Close"
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
