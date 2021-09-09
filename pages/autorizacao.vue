<template>
  <card @click-button="button">
    <template #title>
      Autorização de <br />
      consulta ao SCR
    </template>
    <template #body>
      <p class="body-3 pb-4">Para análise de crédito na:</p>
      <p class="body-2 font-weight-bold">Empresa</p>
      <p class="body-2 uppercase">Nome Teste</p>
      <p class="body-2 font-weight-bold">CNPJ</p>
      <p class="body-2 pb-4">88.836.495/0001-34</p>
      <p class="body-2 font-weight-bold">Cliente</p>
      <p class="body-2 uppercase">Nome do Cliente Teste</p>
      <p class="body-2 font-weight-bold">CNPJ</p>
      <p class="body-2 pb-4">88.836.495/0001-34</p>
      <p class="body-2 justified mb-2">
        Autorizo a Empresa acima, a consulta dos débitos e responsabilidades
        decorrentes de operações de crédito que constem ou venham a constar em
        meu nome e de minhas empresas, no
        <a class="paragraph--text text--darken-4"
          ><strong>Sistema de Informações de Crédito - SCR</strong>
        </a>
        do Banco Central, através da Nagro Crédito Agro Ltda.
      </p>
    </template>
    <template #button> Autorizar </template>
  </card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'base',
  methods: {
    button() {
      this.$router.push('/importante')
    },
  },
})
</script>
<style lang="scss" scoped>
.justified {
  text-align: justify;
  line-height: 24px !important;
}
</style>
