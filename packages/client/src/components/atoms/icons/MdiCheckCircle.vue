<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiCheckCircle" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiCheckCircle } from '@mdi/js'
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      return { mdiCheckCircle }
    }
  })
</script>
