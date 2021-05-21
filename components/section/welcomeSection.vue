<template>
  <div class="section" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div
      class="fill-height welcome"
      :style="{
        'background-image': $vuetify.theme.dark
          ? 'linear-gradient(to bottom,rgba(18, 18, 18, 0.6) 70%,rgba(18, 18, 18, 1))'
          : 'linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 70%,rgba(255, 255, 255, 1))',
      }"
    >
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="9">
            <div
              class="mb-10 text-uppercase"
              style="position: relative; z-index: 1"
            >
              <div class="text-h5 text-sm-h4 text-xl-h3 font-weight-bold">
                {{ $t('welcome').hello }}!!!
              </div>
              <div class="my-5 text-h3 text-sm-h2 text-xl-h1 font-weight-bold">
                {{ $t('welcome').name }}
              </div>
              <div class="text-h5 text-xl-h4 font-weight-bold">
                {{ $t('welcome').student }}
              </div>
            </div>
            <v-btn :dark="!$vuetify.theme.dark" :light="$vuetify.theme.dark">
              {{ $t('welcome').buttons.about }}
            </v-btn>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="0" md="3">
            <div class="images">
              <v-img
                width="100%"
                src="https://preview.colorlib.com/theme/satner/img/banner/xhome-right.png.pagespeed.ic.F5fc5uJEZ3.webp"
                :style="{
                  right: `${
                    $vuetify.breakpoint.xl
                      ? '0px'
                      : $vuetify.breakpoint.lg
                      ? '115px'
                      : '190px'
                  }`,
                }"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/code-bg.png'
export default {
  data: () => ({
    backgroundUrl,
  }),
}
</script>

<style lang="scss" scoped>
.section {
  height: 95vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: gray;
}
.welcome {
  .images {
    width: 400px;
    right: 0;
  }
}
</style>
