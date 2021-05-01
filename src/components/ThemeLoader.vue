<template>
  <div style="display: block">
    <div>{{ themeName }}</div>
    <div>{{ isDark ? "DARK" : "LIGHT" }}</div>
  </div>
  <!--
  --bc-primary: #A976D2; 
  --bc-secondary: #1B4242; 
  --bc-accent: #82C1FF; 
  --bc-error: #AF5D52; 
  --bc-info: #B196E3; 
  --bc-success: #4CAF5F; 
  --bc-warning: #1FC107; 
  --bc-text: black;
  --bc-background: white;
  -->
</template>

<script>
export default {
  name: "ThemeLoader",
  props: {
    themes: { type: Array, require: true },
    vuetify: { type: Object },
    themeName: { type: String, default: "pesticides" },
    isDark: { type: Boolean, defauly: false },
  },
  data() {
    return {
      root: null,
    };
  },
  methods: {
    getTheme(name) {
      return this.themes.find((t) => {
        return t.name === name;
      });
    },
    setTheme(themeName) {
      if (!themeName) return;
      const theme = this.getTheme(themeName);
      if (!theme) return;

      const variant = this.isDark ? "dark" : "light";
      const useVuetify = !!this.vuetify;
      if (useVuetify) {
          this.vuetify.isDark = this.isDark;
          console.log(this.vuetify);
      }

      const colors = theme.theme[variant];

      Object.keys(colors).forEach((key) => {
        const cssKey = `--bc-${key}`;
        const cssValue = colors[key];

        // update bc theme
        this.root.style.setProperty(cssKey, cssValue);

        // update vuetify theme
        if (useVuetify) {         
          const v_cssKey = this.vuetify.themes[variant];
          v_cssKey[key] = cssValue;
        }
      });
    },
  },
  watch: {
    themeName(v) {
      this.setTheme(v);
    },
    isDark() {
      this.setTheme(this.themeName);
    },
  },
  mounted() {
    this.root = document.documentElement;
    this.setTheme(this.themeName);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$colors: (primary secondary accent error info warning success);
$bg-default: var(--bc-background); // default background color
$text-default: var(--bc-text); // default text color

@mixin createClasses($name, $color) {
  // override vuetify on bootstrap
  /*
     .#{$name} {
      background: var(--bc-#{$name});
    }
    */

  /* create all backgrounds:
      bc-primary, bc-secondary, etc.. */
  .bc-#{$name} {
    background: var(--bc-#{$name});
  }

  .bc--#{$name}--text {
    color: var(--bc-#{$name});
  }

  .bc-btn--#{$name} {
    background: var(--bc-#{$name});
    color: $text-default;
    padding: 4px;
    padding-left: 6px;
    padding-right: 6px;
    font-weight: bold;
    border-radius: 4px;
  }

  .bc-header--#{$name} {
    background: var(--bc-#{$name});
    color: $text-default;
  }
}

@each $c in $colors {
  @include createClasses($c, var(--bc-#{$c}));
}

body {
  background: $bg-default;
  color: $text-default;
}
</style>
