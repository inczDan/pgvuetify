<template>
  <div>
    <font-awesome-icon icon="spinner" />
    <!-- area do botao de logout -->
    <v-layout justify-end>
      <v-btn class="margem" color="primary" @click="voltaParaLogin">
        Logout
      </v-btn>
    </v-layout>
    <v-btn class="mx-2 criar-tarefa" fab dark color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <!-- fim botao logout -->

    <!--INICIO ITEM DE ANOTAÇOES -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :counter="40"
        :rules="titleRules"
        label="Titulo"
        required
      ></v-text-field>

      <v-text-field
        v-model="conteudo"
        :rules="conteudoRules"
        label="Conteúdo"
        required
      ></v-text-field>

      <v-text-field v-model="data" :counter="40" label="Data"></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Salvar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Excluir </v-btn>

      <v-btn color="warning" @click="resetValidation"> Editar </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    valid: true,
    title: "",
    titleRules: [(v) => !!v || "É preciso escrever um titulo!"],
    conteudo: "",
    conteudoRules: [(v) => !!v || "É preciso escrever algo"],
    data: new Date.toString(),
    select: null,
    checkbox: false,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    voltaParaLogin() {
      this.$router.push("/login");
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.margem {
  margin-right: 15px;
  margin-top: 20px;
}
.criar-tarefa {
  margin-right: 50%;
}
</style>
