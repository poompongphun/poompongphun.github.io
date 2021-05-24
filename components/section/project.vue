<template>
  <div
    v-intersect="onIntersect"
    class="scroll-up"
    :class="{ 'scroll-up-enter': isShow }"
  >
    <div class="py-5 text-center">
      <h1>
        {{ $t('welcome').project }}
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn fab icon x-small v-bind="attrs" v-on="on">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('welcome').showmore }}</span>
        </v-tooltip>
      </h1>
    </div>
    <v-scroll-y-reverse-transition>
      <v-row v-show="isShow" class="mx-2" dense>
        <v-col
          v-for="(project, n) in projectShow"
          :key="n"
          cols="12"
          sm="6"
          md="4"
          xl="3"
        >
          <v-card
            :ref="`project-${n}`"
            class="rounded-xl elevation-1 scale-up"
            :class="{ 'scale-up-enter': project.show }"
            to="/"
          >
            <v-img
              class="align-end"
              :aspect-ratio="16 / 9"
              :src="project.img[0]"
            >
              <div
                :style="{
                  'background-image': $vuetify.theme.dark
                    ? 'linear-gradient(to bottom,rgba(18, 18, 18, 0) ,rgba(18, 18, 18, 0.8) 80%)'
                    : 'linear-gradient(to bottom,rgba(255, 255, 255, 0) ,rgba(255, 255, 255, 0.8) 80%)',
                }"
              >
                <v-card-title>
                  <v-chip>
                    {{ project.name }}
                  </v-chip>
                </v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-scroll-y-reverse-transition>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isShow: false,
    projectShow: [],
  }),
  watch: {
    isShow(val) {
      if (val) {
        for (let i = 0; i < this.projects.length; i++) {
          ;((index) => {
            setTimeout(() => {
              this.projectShow.push(this.projects[i])
              setTimeout(() => {
                this.projectShow[i].show = true

                // fix bug if dont use this last array will not show
                if (i === this.projects.length - 1) {
                  this.$refs[`project-${i}`][0].$el.classList.value =
                    this.$refs[`project-${i}`][0].$el.classList.value +
                    ' scale-up-enter'
                }
              }, 60)
            }, i * 200)
          })(i)
        }
      }
    },
  },
  methods: {
    onIntersect(entries, observer) {
      if (!this.isShow) {
        this.isShow = entries[0].isIntersecting
      }
    },
  },
}
</script>

<style lang="scss"></style>
