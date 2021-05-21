<template>
  <v-app>
    <v-app-bar
      fixed
      :color="
        $vuetify.theme.dark
          ? `rgba(22, 22, 22, ${isTop ? '0' : '0.8'})`
          : `rgba(255, 255, 255, ${isTop ? '0' : '0.8'})`
      "
      elevate-on-scroll
      :dark="$vuetify.theme.dark"
    >
      <v-container class="pa-0 fill-height">
        <v-toolbar-title>Poom</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          href="https://github.com/poompongphun"
          target="_blank"
          rel="noopener"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-menu offset-y nudge-left="70" rounded="xl">
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>

          <v-list class="d-flex" rounded dense>
            <v-list-item
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isTop: true,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isTop = !(window.scrollY > 0)
    },
  },
}
</script>

<style lang="scss">
.v-application {
  [class*='text-'] {
    font-family: $font-family, sans-serif !important;
  }
  font-family: $font-family, sans-serif !important;
}
</style>
