<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiSprout" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiSprout } from '@mdi/js'
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      return { mdiSprout }
    }
  })
</script>
