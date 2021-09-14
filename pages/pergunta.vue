<template>
  <card @click-button="button">
    <template #body>
      <div class="d-flex align-end">
        <h1 class="line-height">Questionário</h1>
        <div class="ml-2 d-flex justify-center align-center">
          <p
            class="bady-1 rounded-circle pa-1 px-2"
            :class="[
              { 'redClass px-3': countDown < 10 },
              { greenClass: countDown >= 20 },
              { yellowClass: countDown < 20 && countDown >= 10 },
            ]"
          >
            {{ countDown }}
          </p>
        </div>
      </div>
      <questionario v-model="selected" :question="questions[index]" />
    </template>
    <template #button> Próxima </template>
  </card>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  layout: 'base',
  data: () => ({
    countDown: 45,
    index: 0,
    selected: -1,
    answers: [] as Array<any>,
    setInterval: setInterval(() => {}, 0),
  }),
  computed: {
    ...mapGetters(['questions']),
  },
  created() {
    if (!this.questions) this.$router.push('/validacao')
    this.countDownTimer()
  },

  methods: {
    button(): void {
      this.answers.push({
        id: this.questions[this.index].id,
        answer: {
          [this.questions[this.index].answers[this.selected].key]:
            this.questions[this.index].answers[this.selected].value,
        },
      })
      this.selected = -1
      this.countDownTimer()
      if (this.answers.length < this.questions.length) {
        this.index += 1
      } else {
        console.log(this.answers)
        // this.$router.push('/validacao')
      }
    },
    countDownTimer(): void {
      this.countDown = 45
      clearInterval(this.setInterval)
      this.setInterval = setInterval(() => {
        if (this.countDown > 0) {
          this.countDown -= 1
        }
      }, 1000)
    },
  },
})
</script>
<style lang="scss">
.line-height {
  line-height: 1.1;
}
.border {
  border: 1px solid var(--v-primary-darken1);
}

.redClass {
  border: 2px solid #f86464;
  color: #f86464;
}

.redClass--text {
  color: #f86464;
}

.greenClass {
  border: 2px solid #0db5b5;
  color: #0db5b5;
}

.yellowClass {
  border: 2px solid #f8bd64;
  color: #f8bd64;
}
</style>
