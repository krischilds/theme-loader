<template>
  <div>
    <h4>Theme Container</h4>
    <ul>
      <li v-for="k in themeKeys" :key="k">{{ k }}</li>
    </ul>

    <button class="bc-btn-primary">Primary Button</button>
    <button class="bc-btn-secondary">Secondary Button</button>
  </div>
</template>

<script>

export default {
  name: "ThemeContainer",
  props: {
    themes: {type: Array, require: true},
  },
  data() {
    return ({ 
      theme: null,
      themeKey: null,
      themeIndex: 0,
      root: null,
    })
  },
  methods: {
    getTheme(name) {
      return this.themes.find(t=> {
        return t.name === name;
      });
    },
    changeTheme() {
      if (!this.themeKeys) return null;
      this.themeIndex++;
      if (this.themeIndex>(this.themeKeys.length-1)) this.themeIndex = 0;
      this.setTheme(this.themeKeys[this.themeIndex]);
    },
    setTheme(themeName) {
      const theme = this.getTheme(themeName);
      if (!theme) return;
      Object.keys(theme.theme.light).forEach((key) => {
        console.log(key);
        const cssKey = `--bc-${key}`;
        const cssValue = theme.theme.light[key];
        this.root.style.setProperty(cssKey, cssValue);        
      });
      this.currentTheme = themeName;
    }
  },
  computed: {
    themeKeys() {
      return this.themes.map(t=> {
        return t.name;
      })
      //return Object.keys(themes);
    }    
  },
  mounted() {
    this.root = document.documentElement;
    this.setTheme('vetdrugs');    
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .bc-primary {
    background: var(--bc-primary);
    color: var(--bc-text);
  }

  @mixin createButton($name, $bgcolor, $textcolor) {
    .bc-btn-#{$name} {
      background: $bgcolor;
      color: $textcolor;
    }
  }

  @include createButton('primary', var(--bc-primary), var(--bc-text));
  @include createButton('secondary', var(--bc-secondary), var(--bc-text));

</style>
