<template>
  <card @click-button="button">
    <template #body>
      <div class="d-flex align-end">
        <h1 class="line-height">Questionário</h1>
        <div class="ml-2 d-flex justify-center align-center">
          <p class="bady-1 rounded-circle pa-1 px-2 greenClass">20</p>
        </div>
      </div>
      <p class="font-weight-bold body-2 pb-9">Pergunta do questionario?</p>
      <div>
        <div
          v-for="(opc, index) in questions"
          :key="index"
          class="mb-4 border rounded-lg d-flex align-center py-2"
          :class="2 === index ? 'primary darken-1' : ''"
          style="cursor: pointer"
        >
          <p
            class="pl-4 body-2"
            :class="
              2 === index ? 'white--text' : 'primary--text text--darken-1'
            "
          >
            {{ opc.value }}
          </p>
        </div>
      </div>
    </template>
    <template #button> Próxima </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'base',
  data: () => ({
    questions: [
      { value: 'Opção A' },
      { value: 'Opção B' },
      { value: 'Opção C' },
      { value: 'Opção D' },
    ],
  }),
  methods: {
    button() {
      this.$router.push('/validacao')
    },
  },
})
</script>
<style lang="scss">
.greenClass {
  border: 2px solid #0db5b5;
  color: #0db5b5;
}
.border {
  border: 1px solid var(--v-primary-darken1);
}
.line-height {
  line-height: 1.1;
}
</style>
