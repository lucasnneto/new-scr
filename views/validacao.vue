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
            v-if="selectType === 'phone'"
            :rules="[rules.required, rules.celular]"
            class="input-txt"
            v-mask="'(##) #####-####'"
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
            v-else
            :rules="[rules.required, rules.email]"
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
import Vue, { VueConstructor } from 'vue';
import rules from '@/mixins/rules';
export default (Vue as VueConstructor<Vue & InstanceType<typeof rules>>).extend(
  {
    mixins: [rules],
    layout: 'base',
    data: () => ({
      selectType: 'phone',
    }),
    methods: {
      button(): void {
        if (
          !(
            this.$refs.Validacao as Vue & {
              validate: () => boolean;
            }
          ).validate()
        ) {
          return;
        }
      },
    },
  }
);
</script>
