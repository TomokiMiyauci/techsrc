<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiGithub" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiGithub } from '@mdi/js'
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      return { mdiGithub }
    }
  })
</script>
