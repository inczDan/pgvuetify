<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        shrink-on-scroll
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title class="text-h5">Anotações Gerais</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab class="black--text">Estudos</v-tab>
            <v-tab class="black--text">Financeiro</v-tab>
            <v-tab class="black--text">Saúde</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        color="indigo lighten-3	SlateBlue3"
        max-height="850"
      >
        <v-container style="height: 850pc; margin-top: 13%">
          <!-- inicio do codigo que renderiza as tasks -->
          <v-card
            v-for="task in tasks"
            :key="task.id"
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line class="indigo lighten-1">
              <v-list-item-content>
                <div class="text-overline mb-4">{{ task.project }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ task.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions class="indigo lighten-2">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn outlined rounded text @click="vaiParaEdicaoTask(task)">
                Editar
              </v-btn>
              <v-btn outlined rounded text @click="removeTask(task)">
                Deletar
              </v-btn>
            </v-card-actions>
          </v-card></v-container
        >
      </v-sheet>
    </v-card>

    <!-- rodapé -->
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          To Do List desenvolvido como metodologia de treinamento para aprimorar
          o uso do FrameWork Vuetify e a lógica por trás da composição de uma
          aplicação completa.To Do List desenvolvido como metodologia de
          treinamento para aprimorar o uso do FrameWork Vuetify e a lógica por
          trás da composição de uma aplicação completa.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>InczDan - BuserTech</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import apiMethods from "@/apiMethods.js";
export default {
  data: () => ({
    tasks: [],
    value: 1,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    getTasks() {
      apiMethods.getData((data) => {
        this.tasks = data;
      });
    },
    removeTask(task) {
      apiMethods.deleteData(task.id).then(() => {
        this.getTasks();
      });
    },
  },
  created() {
    this.getTasks();
  },
};
</script>
