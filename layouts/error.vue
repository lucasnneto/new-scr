<template>
  <v-app>
    <v-main>
      <div
        :class="{ 'd-flex justify-center': $vuetify.breakpoint.width > 480 }"
        :style="
          $vuetify.breakpoint.width > 480
            ? 'width: 100%; background-color: #fff; height: 100%'
            : ''
        "
      >
        <v-container
          fluid
          style="height: 90vh; max-width: 480px"
          class="pa-6 d-flex flex-column"
          overflow-y-hidden
        >
          <div
            style="height: 100%"
            class="d-flex flex-column align-center justify-center"
          >
            <h1>Erro 404</h1>
            <img src="@/assets/error.svg" width="80px" class="my-6" />
            <h3>Página não encontrada</h3>
          </div>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
