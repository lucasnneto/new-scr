<template>
  <v-card width="480px" height="630px" elevation="0" class="card py-10 px-6">
    <div class="body">
      <h1 class="line-height pb-2">
        <slot name="title" />
      </h1>
      <slot name="body" />
      <div class="bottom">
        <v-btn
          v-if="!removeButton"
          color="primary darken-1"
          depressed
          height="48px"
          x-large
          class="text-capitalize body-1 font-weight-bold mb-4"
          block
          @click="$emit('click-button')"
        >
          <slot name="button" />
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('screen');
export default Vue.extend({
  props: {
    removeButton: Boolean,
  },
  computed: {
    ...mapState(['lastPage', 'name']),
  },
  methods: {
    ...mapActions(['CHANGE']),
  },
});
</script>
<style lang="scss" scoped>
.card {
  border-radius: 15px !important;
}
.line-height {
  line-height: 1.1;
}
.body {
  position: relative;
  height: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
