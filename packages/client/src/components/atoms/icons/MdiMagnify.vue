<template>
  <base-svg>
    <path :d="mdiMagnify" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiMagnify } from '@mdi/js'
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      return { mdiMagnify }
    }
  })
</script>
