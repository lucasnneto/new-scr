<template>
  <v-overlay opacity="0" color="white">
    <v-progress-circular
      color="primary darken-1"
      indeterminate
      size="120"
    ></v-progress-circular>
  </v-overlay>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  created() {
    const id: string = this.$route.params.id
    this.CHANGE({ id })
    this.$router.push('/autorizacao')
  },
  methods: {
    ...mapActions(['CHANGE']),
  },
})
</script>
