<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes your content based upon application components -->

    <!-- Provides the application the proper gutter -->
    <v-container style="height: 10%" fluid>
      <!-- If using vue-router -->
      <v-card max-width="100%" max-height="100%" class="mx-auto">
        <v-system-bar color="blue darken-1" dark></v-system-bar>

        <v-app-bar dark color="blue">
          <v-toolbar-title>Meu Resumo</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73" dark>
                <v-card-title class="text-h5">
                  Criar uma nova anotação ✍️
                </v-card-title>

                <v-card-subtitle
                  >Não perca mais nada, anote suas metas e seus deveres, mude e
                  deixe participarmos da sua evolução.</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn outlined rounded @click="vaiParaCriarAnotacao">
                    Nova anotação
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <!-- inicio segunda barra -->
            <v-col cols="12">
              <v-card color="#285F73" dark>
                <v-card-title class="text-h5"> Favoritos ❤️ </v-card-title>

                <v-card-subtitle
                  >Suas anotações preferidas estão aqui 😍.</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="vaiParaFavoritos"
                  >
                    Visualizar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <!-- inicio terceira barra -->
            <v-col cols="12">
              <v-card color="#952175" dark>
                <v-card-title class="text-h5"> Geral </v-card-title>

                <v-card-subtitle
                  >Aquelas metas que você ja bateu e sente o mesmo orgulho que
                  nós 🥺</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="vaiParaArquivados"
                  >
                    Visualizar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <!-- fim das barras -->
          </v-row>
        </v-container>
      </v-card>
      <router-view></router-view>
    </v-container>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
    value: 1,
  }),
  methods: {
    vaiParaEdicaoTask(task) {
      this.$router.push({ name: "editarTarefas", params: { id: task.id } });
    },

    vaiParaArquivados() {
      this.$router.push("/arquivados");
    },
    vaiParaFavoritos() {
      this.$router.push("/favoritos");
    },

    vaiParaCriarAnotacao() {
      this.$router.push("/anotacao");
    },
  },
};
</script>
