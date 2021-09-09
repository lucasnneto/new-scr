<template>
  <v-app>
    <v-main :class="{ 'd-flex align-center primary': breakpoint }">
      <v-container>
        <div class="d-flex justify-center">
          <Nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'default',
  middleware: 'auth',
  computed: {
    breakpoint(): Boolean {
      return this.$vuetify.breakpoint.width > 480
    },
  },
})
</script>
