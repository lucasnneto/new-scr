<template>
  <card @click-button="button">
    <template #title> Insira o código </template>
    <template #body>
      <div class="d-flex justify-start align-center mb-4">
        <v-icon class="mr-1 special-0" color="primary darken-1" medium
          >keyboard_arrow_left</v-icon
        >
        <p class="body-3 primary--text text--darken-1 pointer">Voltar</p>
      </div>
      <p class="pt-8 body-1 mb-5">
        Enviamos um código de 4 dígitos para o seu celular:
        <span class="paragraph--text text--darken-4"> </span>
      </p>
      <form id="first-access-form" ref="first_access_form" class="text-center">
        <p class="pt-5 body-1 mb-8">Insira aqui o código recebido:</p>
        <v-layout class="mt-4 d-flex justify-space-around mx-10">
          <div v-for="(code, index) in codes" :key="index" class="d-flex">
            <div class="v-input v-text-field v-text-field--enclosed">
              <input
                :id="code"
                :ref="code"
                class="my-3"
                maxlength="1"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                type="text"
              />
            </div>
          </div>
        </v-layout>
      </form>
      <div class="d-flex flex-column align-center mt-6">
        <div>
          <span class="body-1"> Não recebeu o SMS? </span>

          <button class="btn">
            <span class="body-1"> Reenviar! </span>
          </button>
        </div>

        <p class="body-0">1:00</p>
      </div>
    </template>
    <template #button> Assinar </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('screen');
export default Vue.extend({
  layout: 'base',
  data: () => ({
    codes: ['input_1', 'input_2', 'input_3', 'input_4'],
  }),
  methods: {
    ...mapActions(['CHANGE']),
    button() {
      this.CHANGE({
        name: 'step6',
      });
    },
  },
});
</script>
<style scoped>
.content {
  margin: 40px 24px;
}

.border {
  border: 1px solid black;
}

.v-input {
  width: 56px !important;
  border: 2px solid #a7afc3;
  border-radius: 8px;
  font-weight: bold;
  font-size: 26px !important;
}

.v-input:focus-within {
  border: 2px solid #0db5b5;
}

.line-height {
  line-height: 1.1;
}

input {
  font-size: 26px !important;
}

input[type='text'] {
  text-align: center;
  font-size: 26px !important;
}

.btn,
.btn-disabled {
  border: none;
  outline: inherit;
}

.btn span {
  color: #0db5b5;
}

.btn-disabled span {
  color: #a7afc3;
}

.justified {
  text-align: justify;
  line-height: 1.3 !important;
}

@media screen and (max-height: 400px) {
  .display-btn {
    display: none;
  }
}

@media screen and (max-height: 330px) {
  .v-input,
  input {
    font-size: 20px !important;
    margin: 0;
  }
}

.pointer {
  cursor: pointer;
}

.spinner {
  animation: donut-spin 1.5s linear infinite;
}

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
