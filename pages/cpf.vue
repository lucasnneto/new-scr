<template>
  <card @click-button="button">
    <template #title> Insira seu CPF </template>
    <template #body>
      <p class="pt-8 body-1 mb-8">
        Insira o
        <span class="paragraph--text text--darken-4">
          <strong>número do seu CPF:</strong>
        </span>
      </p>
      <div class="d-flex flex-column justify-space-between">
        <v-form id="validacao" ref="Validacao">
          <v-text-field
            class="input-txt"
            height="48px"
            color="primary darken-1"
            outlined
            inputmode="numeric"
            pattern="[0-9]*"
            placeholder="Número de CPF"
            autofocus
            validate-on-blur
          >
          </v-text-field>
        </v-form>
      </div>
    </template>
    <template #button> Próxima </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'base',
  methods: {
    button() {
      this.$router.push('/pergunta')
    },
  },
})
</script>
