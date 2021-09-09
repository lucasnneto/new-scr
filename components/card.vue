<template>
  <v-card width="480px" height="640px" elevation="0" class="card py-10 px-6">
    <div class="body">
      <h1 class="line-height pb-2">
        <slot name="title" />
      </h1>
      <slot name="body" />
      <div class="bottom">
        <v-btn
          color="primary darken-1"
          depressed
          height="48px"
          x-large
          class="text-capitalize body-1 font-weight-bold mb-4"
          block
          @click="$emit('click-button')"
        >
          <slot name="button" />
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<style lang="scss" scoped>
.card {
  border-radius: 15px !important;
}
.line-height {
  line-height: 1.1;
}
.body {
  position: relative;
  height: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
