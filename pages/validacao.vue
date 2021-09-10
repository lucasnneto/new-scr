<template>
  <card @click-button="button">
    <template #title> Validação </template>
    <template #body>
      <p class="pt-8 body-1 mb-8">
        Insira
        <span class="paragraph--text text--darken-4">
          <strong>seu número de celular</strong>, para receber um código de
          validação via SMS.
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
            placeholder="Celular"
            autofocus
            validate-on-blur
          >
          </v-text-field>

          <v-text-field
            class="input-txt"
            height="48px"
            color="primary darken-1"
            outlined
            placeholder="E-mail"
            autofocus
          >
          </v-text-field>
        </v-form>
      </div>
    </template>
    <template #button> Validar </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'base',
  methods: {
    button() {
      this.$router.push('/validacaocodigo')
    },
  },
})
</script>
