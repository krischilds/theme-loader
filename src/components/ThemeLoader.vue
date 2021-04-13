<template>
  <div style="display:none;"/>
<!--
  --bc-primary:#A976D2; 
  --bc-secondary:#1B4242; 
  --bc-accent:#82C1FF; 
  --bc-error:#AF5D52; 
  --bc-info:#B196E3; 
  --bc-success:#4CAF5F; 
  --bc-warning:#1FC107; 
  --bc-text:black;
  --bc-background:white;
  -->
</template>

<script>
export default {
  name: "ThemeLoader",
  props: {
    themes: {type: Array, require: true},
    vuetify: {type: Object},
    themeName: {type: String, default: 'default'},
    isDark: {type: Boolean, defauly: false}
  },
  data() {
    return ({ 
      root: null,
    })
  },
  methods: {
    // initThemes
    // setTheme + setTheme defualt
    // -- supporting functions
    //    - buildStyles
    //    - set css vars depending on config
    //        - set vuetify
    //        - set bs
    //        - set custom (i.e. --bc-primary)
    getTheme(name) {
      return this.themes.find(t=> {
        return t.name === name;
      });
    },    
    setTheme(themeName) {
      const theme = this.getTheme(themeName);
      if (!theme) {
        //console.error("Theme not found: " + themeName);
        return;
      }

      const colors = this.isDark ? theme.theme.dark : theme.theme.light
      Object.keys(colors).forEach((key) => {        
        // const cssKey = `--${this.customPrefix}-${key}`;
        const cssKey = `--bc-${key}`;
        const cssValue = colors[key];
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
  watch: {
    themeName(v) {
      this.setTheme(v);
    },
    isDark(v) {
      console.log(v);
      if (this.themeName)
        this.setTheme(this.themeName);
    }
  },
  mounted() {
    this.root = document.documentElement;
    this.setTheme(this.themeName);
    /*    
    const self = this;
    window.setTimeout(function() {
      self.setTheme('pesticides');
    }, 3000);
    */
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  $colors: (primary secondary accent error info warning success); // TODO: make dynamic

  $bg-default: var(--bc-background); // usually white (light theme) and black (dark theme), but could be anything
  $text-default: var(--bc-text); // black for light theme, white for dark

  @mixin createClasses($name, $color) {

    // override vuetify on bootstrap
     .#{$name} {
      background: var(--bc-#{$name}) !important;
    }

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
      padding-left:6px;
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
