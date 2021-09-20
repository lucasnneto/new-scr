<template>
  <card @click-button="button">
    <template #title>
      Autorização de <br />
      consulta ao SCR
    </template>
    <template #body>
      <p class="body-3 pb-4">Para análise de crédito na:</p>
      <p class="body-2 font-weight-bold">Empresa</p>
      <p class="body-2 uppercase">{{ companyName }}</p>
      <p class="body-2 font-weight-bold">CNPJ</p>
      <p class="body-2 pb-4">{{ maskCpfCnpj(companyTaxId) }}</p>
      <p class="body-2 font-weight-bold">Cliente</p>
      <p class="body-2 uppercase">{{ clientName }}</p>
      <p class="body-2 font-weight-bold">
        {{ clientTaxId.length == 11 ? 'CPF' : 'CNPJ' }}
      </p>
      <p class="body-2 pb-4">{{ maskCpfCnpj(clientTaxId) }}</p>
      <p class="body-2 justified mb-2">
        {{ slipTerm[0] }}
        <a class="paragraph--text text--darken-4"
          ><strong>Sistema de Informações de Crédito - SCR</strong>
        </a>
        {{ slipTerm[1] }}
      </p>
    </template>
    <template #button> Autorizar </template>
  </card>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('screen');
import { maskCpfCnpj } from '../mixins/utils';
export default Vue.extend({
  computed: {
    ...mapState([
      'companyName',
      'companyTaxId',
      'clientName',
      'term',
      'clientTaxId',
    ]),
    slipTerm(): String[] {
      return this.term.split('Sistema de Informações de Crédito - SCR');
    },
  },
  methods: {
    maskCpfCnpj,
    ...mapActions(['CHANGE']),
    button() {
      this.CHANGE({
        name: 'step2',
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.justified {
  text-align: justify;
  line-height: 24px !important;
}
</style>
