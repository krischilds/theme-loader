<template>
  <div id="app">
    <ThemeLoader :themes="themes" :themeName="themeName" :isDark="isDark"/>
    <ul style="width:80%">
    <li v-for="c in colors" :key="c" class="list-items">
      <div :class="`bc-${c}`">{{ c }} background</div>
      <button :class="`bc-btn--${c}`">{{ c }} button</button>
      <div :class="`bc-header--${c}`">Message</div>
    </li>
    </ul>

    <ul style="width:80%">
    <li v-for="c in colors" :key="c" class="list-items">
      <div :class="`${c}`">OVERRIDE {{ c }} background</div>
    </li>
    </ul>
    
    <button v-for="t in themeKeys" @click="setThemeName(t)" :key="t">Set theme {{t}}</button>

    <button @click="setIsDark(isDark)">Set {{isDark ? "Light" : "Dark"}}</button>
    
  </div>
</template>

<script>
import ThemeLoader from "./components/ThemeLoader.vue";
import themes from "./themes";

export default {
  name: "App",
  data() {
    return {
      themes,
      colors: [],
      isDark: false,
      themeName: null,
      themeKeys: [],
    };
  },
  components: {
    ThemeLoader,
  },
  methods: {

    setThemeName(name) {
      this.themeName = name;
    },

    setIsDark(isDark) {
      this.isDark = !isDark;
    }
  },
  mounted() {

    this.themeKeys = this.themes.map(t=> {
      return t.name;
    });

    this.themeName = this.themeKeys[0];

    this.colors = Object.keys(this.themes[0].theme.light).filter((item) => {
      return item !== "text" && item !== "background";
    });
  },
};
</script>

<style lang="scss">
.list-items {
  div {
    margin: 10px;
  }
}

</style>
