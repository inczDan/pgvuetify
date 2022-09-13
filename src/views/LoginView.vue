<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">To Do list</h1>
          <h4 class="subheading">Guarde, Realize, Seja!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <div class="text-center">
      <h1 class="text-center">Bem-vindo(a)!</h1>
      <v-icon color="grey lighten-1" large> mdi-account </v-icon>
    </div>

    <v-container class="grey lighten-5">
      <v-row no-gutters class="caixa-login">
        <v-col cols="1" sm="4" md="4">
          <v-card class="pa-2" outlined tile
            ><v-text-field label="Usuario" placeholder="Insira seu usuario" />
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile
            ><v-text-field
              type="password"
              label="Senha"
              placeholder="Insira sua senha"
            />
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-layout justify-center>
          <v-btn class="btn-login" color="primary" @click="vaiParaInicio">
            Login
          </v-btn>
          <v-btn
            class="justify-center"
            color="primary"
            @click="vaiParaRegistro"
          >
            Registrar-se
          </v-btn>
        </v-layout>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    vaiParaInicio() {
      this.$router.push("/home");
    },
    vaiParaRegistro() {
      this.$router.push("/registrar");
    },
  },
};
</script>
<style scoped>
.caixa-login {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  margin: auto;
}
.btn-login {
  margin-right: 13.5%;
}
</style>
