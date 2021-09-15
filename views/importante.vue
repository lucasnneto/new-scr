<template>
  <card @click-button="button">
    <template #title> Importante! </template>
    <template #body>
      <p class="text body-2 mt-7 pb-9">
        Para realizar a autorização, você deverá seguir alguns passos:
      </p>
      <div v-if="!isLegalPerson" class="d-flex align-center mb-7">
        <div
          class="
            primary
            darken-1
            rounded-circle
            d-flex
            justify-center
            align-center
            mr-3
          "
          style="height: 34px; min-width: 34px"
        >
          <span class="white--text body-2">1</span>
        </div>
        <p class="body-2">
          Responder algumas
          <span class="font-weight-bold">perguntas sobre você</span>
        </p>
      </div>
      <div class="d-flex align-center mb-7">
        <div
          class="
            primary
            darken-1
            rounded-circle
            d-flex
            justify-center
            align-center
            mr-3
          "
          style="height: 34px; min-width: 34px"
        >
          <span class="white--text body-2">{{ !isLegalPerson ? 2 : 1 }}</span>
        </div>
        <p class="body-2">
          Inserir um
          <span class="font-weight-bold">código de 4 dígitos</span>
          recebido por SMS
        </p>
      </div>
      <p class="body-2">
        Lembre-se de
        <span
          class="font-weight-bold"
          :class="{ 'red--text': !locationEnable }"
        >
          permitir o acesso à sua localização,
        </span>
        pois este passo é necessário para realizar a autorização.
      </p>

      <p v-if="!locationEnable" class="mt-2 body-2 font-weight-bold red--text">
        Caso não consiga liberar sua localização favor utilizar outro
        dispositivo.
      </p>

      <p v-if="isSafari" class="mt-4 body-2">
        Se estiver com problemas no Safari,
        <a href="https://support.apple.com/pt-br/HT207092" target="_blank"
          >clique aqui</a
        >
      </p>
    </template>
    <template #button> Ok, Entendi! </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('screen');
export default Vue.extend({
  data: () => ({
    locationEnable: true,
  }),
  computed: {
    ...mapGetters(['isLegalPerson']),
    isSafari() {
      return navigator.vendor.includes('Apple');
    },
  },
  methods: {
    ...mapActions(['CHANGE']),
    button() {
      this.CHANGE({
        name: this.isLegalPerson ? 'cpf' : 'pergunta',
      });
    },
  },
});
</script>
