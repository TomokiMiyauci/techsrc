import Messenger from '@/components/chat/molecules/Messenger.vue'

export default {
  title: 'chat/molecules/Messenger',
  components: Messenger,

  argTypes: {
    step: {
      control: {
        type: 'inline-radio',
        options: ['other', 'entrance']
      }
    },

    isLogin: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const DEFAULT = () => ({
  template: '<messenger v-bind="$props" />',

  props: {
    step: {
      default: 'entrance'
    },

    isLogin: {
      default: false
    }
  }
})
