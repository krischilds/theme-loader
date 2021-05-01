<template>
  <v-app>    
    <v-app-bar app primary dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <theme-loader :themes="themes" themeName="vetdrugs" :isDark="isDark" :vuetify="vuetify"/>
      <p>This is {{isDark ? "dark" : "light"}}</p>
      <button @click="isDark = !isDark">Toggle {{isDark ? "dark" : "light"}} theme</button>
      <div class="bc-primary">primary</div>
      <div class="bc-secondary">secondary</div>
      <div class="bc-accent">accent</div>
      <div>Vuetify</div>
      <div class="primary">primary</div>
      <div class="secondary">secondary</div>
      <div class="accent">accent</div>
    </v-main>
  </v-app>
</template>

<script>
import themes from "./themes";
import ThemeLoader from './components/ThemeLoader.vue';

export default {
  name: "App",

  components: {
    'theme-loader': ThemeLoader
  },

  data: () => ({
    themes,
    isDark: false,
    vuetify: null,
    //
  }),
  mounted() {
    this.vuetify = this.$vuetify.theme;
  }
};
</script>
