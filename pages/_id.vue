<template>
  <!-- <v-overlay opacity="0" color="white">
    <v-progress-circular
      color="primary darken-1"
      indeterminate
      size="120"
    ></v-progress-circular>
  </v-overlay> -->
  <div>
    <component :is="step" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
export default Vue.extend({
  layout: 'base',
  created() {
    // const id: string = this.$route.params.id;
    // console.log(id);
    // this.GET_DATA(id);
  },
  computed: {
    ...mapState(['step']),
  },
  methods: {
    ...mapActions(['GET_DATA', 'CHANGE']),
  },
});
</script>
