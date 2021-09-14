<template>
  <div>
    <p class="font-weight-bold body-2 pb-9">{{ question.question }}</p>
    <div>
      <div
        v-for="(opc, index) in question.answers"
        :key="index"
        class="mb-4 border rounded-lg d-flex align-center py-2"
        :class="value === index ? 'primary darken-1' : ''"
        style="cursor: pointer"
        @click="selectElement(index)"
      >
        <p
          class="pl-4 body-2"
          :class="
            value === index ? 'white--text' : 'primary--text text--darken-1'
          "
        >
          {{ opc.value }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    question: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    selectElement(index: Number): void {
      this.$emit('input', index)
    },
  },
})
</script>
