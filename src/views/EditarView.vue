<template>
  <div>
    <font-awesome-icon icon="spinner" />
    <!-- area do botao de logout -->
    <v-layout justify-end>
      <v-btn class="margem" color="primary" @click="voltaParaResumo">
        Return
      </v-btn>
      <v-btn class="margem" color="warning" @click="voltaParaLogin">
        Logout
      </v-btn>
    </v-layout>

    <!-- fim botao logout -->

    <!--INICIO ITEM DE ANOTAÇOES -->
    <v-layout justify-center>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="40">
            <v-text-field
              v-model="newTask.title"
              :counter="40"
              :rules="titleRules"
              label="Titulo"
              color="orange orange-darken-4"
              required
            ></v-text-field>

            <v-select
              v-model="newTask.project"
              :rules="conteudoRules"
              label="Tema"
              color="orange orange-darken-4"
              required
              :items="['Estudos', 'Saúde', 'Financeiro']"
            ></v-select>

            <v-text-field v-model="newTask.dueTo" :counter="40" label="Data">{{
              dhm
            }}</v-text-field>
          </v-col>
        </v-row>
        <v-btn
          :disabled="false"
          color="success"
          class="mr-4"
          @click="validate, voltaParaResumo(), createTask()"
        >
          Salvar
        </v-btn>

        <v-btn color="warning" class="mr-10" @click="reset"> Limpar </v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
// import apiMethods from "@/apiMethods.js";
export default {
  data: () => ({
    dhm: new Date(),
    valid: true,
    titleRules: [(v) => !!v || "É preciso escrever um titulo!"],
    conteudoRules: [(v) => !!v || "É preciso selecionar uma opção"],
    newTask: {
      title: "",
      project: "",
      dueTo: "",
    },
  }),

  methods: {
    voltaParaResumo() {
      this.$router.push("/resumo");
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
