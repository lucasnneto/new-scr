<template>
  <card @click-button="button">
    <template #body>
      <div class="d-flex align-end">
        <h1 class="line-height">Questionário</h1>
        <contador v-model="countDown" />
      </div>
      <questionario v-model="selected" :question="questions[index]" />
    </template>
    <template #button> Próxima </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions, createNamespacedHelpers } from 'vuex';
const { mapActions: actionScreen } = createNamespacedHelpers('screen');
export default Vue.extend({
  layout: 'base',
  data: () => ({
    countDown: 45,
    index: 0,
    selected: -1,
    resetTime: false,
    answers: [] as Array<any>,
  }),
  computed: {
    ...mapGetters(['questions']),
  },
  created() {
    if (!this.questions) this.CHANGE({ name: 'validacao' });
  },

  methods: {
    ...actionScreen(['CHANGE']),
    ...mapActions(['VALID_ANSWERS']),
    button(): void {
      if (this.selected >= 0) {
        this.answers.push({
          id: this.questions[this.index].id,
          answer: {
            [this.questions[this.index].answers[this.selected].key]:
              this.questions[this.index].answers[this.selected].value,
          },
        });
        this.selected = -1;
        this.countDown = 45;
        console.log(this.questions);
        if (this.answers.length < this.questions.length) {
          this.index += 1;
        } else {
          this.VALID_ANSWERS(this.answers);
        }
      }
    },
  },
});
</script>
<style lang="scss">
.line-height {
  line-height: 1.1;
}
.border {
  border: 1px solid var(--v-primary-darken1);
}
</style>
