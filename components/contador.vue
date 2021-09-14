<template>
  <div class="ml-2 d-flex justify-center align-center">
    <p
      class="rounded-circle pa-1 px-2"
      :class="[
        { 'redClass px-3': value < 10 },
        { greenClass: value >= 20 },
        { yellowClass: value < 20 && value >= 10 },
      ]"
    >
      {{ value }}
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    value: {
      type: Number,
      default: -1,
    },
  },
  data: () => ({
    setInterval: setInterval(() => {}, 0),
  }),
  watch: {
    value(): void {
      clearInterval(this.setInterval);
      this.setInterval = setInterval(() => {
        if (this.value > 0) {
          this.$emit('input', this.value - 1);
        }
      }, 1000);
    },
  },
  created() {
    this.$emit('input', this.value - 1);
  },
});
</script>
<style lang="scss" scoped>
.redClass {
  border: 2px solid #f86464;
  color: #f86464;
}

.redClass--text {
  color: #f86464;
}

.greenClass {
  border: 2px solid #0db5b5;
  color: #0db5b5;
}

.yellowClass {
  border: 2px solid #f8bd64;
  color: #f8bd64;
}
</style>
