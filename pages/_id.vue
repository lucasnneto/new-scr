<template>
  <!-- <v-overlay opacity="0" color="white">
    <v-progress-circular
      color="primary darken-1"
      indeterminate
      size="120"
    ></v-progress-circular>
  </v-overlay> -->
  <div>
    <component :is="name" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('screen');
export default Vue.extend({
  layout: 'base',
  created() {
    const id: string = this.$route.params.id;
    this.GET_DATA(id);
  },
  computed: {
    ...mapState(['name']),
  },
  methods: {
    ...mapActions(['GET_DATA', 'CHANGE']),
  },
});
</script>
