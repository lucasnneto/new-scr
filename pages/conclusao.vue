<template>
  <card remove-button>
    <template #title>
      Autorização<br />
      concluída!
    </template>
    <template #body>
      <p class="pt-8 body-1 mb-4">
        Sua autorização foi concluída! A empresa solicitante já foi notificada.
      </p>
      <p class="pt-8 body-1 mb-4">Você já pode fechar esta página.</p>
    </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'base',
})
</script>
