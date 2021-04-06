<template>
  <div id="app">    
    <ThemeContainer :themes="themes" />
  </div>
</template>

<script>
import ThemeContainer from "./components/ThemeContainer.vue";
import themes from './themes';

export default {
  name: "App",
  data() {
    return {
      themes
    }
  },
  components: {
    ThemeContainer,
  },
};
</script>

<style lang="scss">

</style>
