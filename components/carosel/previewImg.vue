<template>
  <div style="height: 100%">
    <v-carousel v-model="imgShowing" height="100%" hide-delimiters>
      <template #[`default`]>
        <div>
          <v-card
            class="float-center elevation-0 pa-2 text-right"
            width="100%"
            style="position: absolute; z-index: 1; background: none; bottom: 0"
            tile
          >
            <v-chip>
              {{ imgShowing + 1 + ' / ' + images.length }}
            </v-chip>
            <v-btn
              color="grey darken-3"
              fab
              x-small
              depressed
              @click="dialogImg = true"
            >
              <v-icon>mdi-fullscreen</v-icon>
            </v-btn>
          </v-card>
          <v-carousel-item v-for="(img, i) in images" :key="i">
            <v-card
              class="grey"
              :height="$vuetify.breakpoint.smAndDown ? '60vh' : '100vh'"
              tile
            >
              <v-img :lazy-src="img.src" height="100%">
                <div
                  class="carousel-bg"
                  :class="{ 'bg-white': !$vuetify.theme.dark }"
                ></div>
                <v-img :src="img.src" height="100%" contain />
              </v-img>
            </v-card>
          </v-carousel-item>
        </div>
      </template>
    </v-carousel>
    <v-dialog
      v-model="dialogImg"
      max-width="100%"
      transition="dialog-transition"
      fullscreen
      @keydown.right="navigate('right')"
      @keydown.left="navigate('left')"
    >
      <v-card class="pa-0" height="100vh" tile>
        <v-card-text class="pa-0">
          <v-carousel v-model="imgShowing" height="100vh" hide-delimiters>
            <template #[`default`]>
              <div>
                <v-card
                  class="float-center elevation-0 pa-2 text-right"
                  width="100%"
                  style="position: absolute; z-index: 1; background: none"
                >
                  <v-chip>
                    {{ imgShowing + 1 + ' / ' + images.length }}
                  </v-chip>
                  <v-btn
                    color="grey darken-3"
                    depressed
                    fab
                    x-small
                    right
                    @click="dialogImg = false"
                    @keydown.esc="dialogImg = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card>

                <v-carousel-item v-for="(img, i) in images" :key="i">
                  <v-card class="grey">
                    <v-img :lazy-src="img.src" aspect-ratio="1" height="100vh">
                      <div
                        class="carousel-bg"
                        :class="{ 'bg-white': !$vuetify.theme.dark }"
                      ></div>
                      <v-img
                        :src="img.src"
                        aspect-ratio="1"
                        contain
                        height="100vh"
                      />
                    </v-img>
                  </v-card>
                </v-carousel-item>
              </div>
            </template>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data: () => ({
    imgShowing: 0,
    dialogImg: false,
  }),
  methods: {
    navigate(arrow) {
      if (arrow === 'left') {
        this.imgShowing = this.imgShowing
          ? this.imgShowing - 1
          : this.images.length - 1
      } else
        this.imgShowing =
          this.imgShowing === this.images.length - 1 ? 0 : this.imgShowing + 1
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  transition: background 0.2s;
}
.bg-white {
  background: rgba(255, 255, 255, 0.5);
}
</style>
