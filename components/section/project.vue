<template>
  <div
    v-intersect="onIntersect"
    class="my-10 scroll-up"
    :class="{ 'scroll-up-enter': isShow }"
  >
    <div class="py-5 text-center">
      <h1>
        {{ $t('welcome').project }}
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn fab icon x-small to="/project" v-bind="attrs" v-on="on">
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
          <v-hover v-slot="{ hover }">
            <v-card
              :ref="`project-${n}`"
              :elevation="hover ? 12 : 1"
              class="rounded-xl scale-up"
              :class="{ 'scale-up-enter': project.show }"
              :to="`/project/${project.name.split(' ').join('-')}`"
            >
              <v-carousel
                height="auto"
                hide-delimiter-background
                hide-delimiters
                :next-icon="false"
                :prev-icon="false"
                :cycle="hover"
                interval="1000"
              >
                <v-carousel-item v-for="(img, i) in project.img" :key="i">
                  <v-img
                    class="align-end"
                    :aspect-ratio="16 / 9"
                    :src="img.src"
                  >
                    <div
                      :style="{
                        'background-image': $vuetify.theme.dark
                          ? 'linear-gradient(to bottom,rgba(18, 18, 18, 0) ,rgba(18, 18, 18, 0.8) 80%)'
                          : 'linear-gradient(to bottom,rgba(255, 255, 255, 0) ,rgba(255, 255, 255, 0.8) 80%)',
                      }"
                    >
                      <v-card-title>
                        <v-chip :light="!$vuetify.theme.dark">
                          {{ project.name }}
                          {{ img.name !== '' ? ` : ${img.name}` : '' }}
                        </v-chip>
                      </v-card-title>
                    </div>
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-hover>
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
  computed: {
    showProject() {
      const project = []
      const numItem = this.$vuetify.breakpoint.xlAndUp
        ? 8
        : this.$vuetify.breakpoint.mdAndUp
        ? 6
        : 4
      for (let i = 0; i < numItem; i++) {
        project.push(this.projectShow[i])
      }
      return project
    },
  },
  watch: {
    isShow(val) {
      if (val) {
        const num = this.$vuetify.breakpoint.xl
          ? 8
          : this.$vuetify.breakpoint.mdAndUp
          ? 6
          : 4
        const numItem = this.projects.length >= num ? num : this.projects.length
        for (let i = 0; i < numItem; i++) {
          ;((index) => {
            setTimeout(() => {
              this.projectShow.push(this.projects[i])
              setTimeout(() => {
                this.projectShow[i].show = true

                // fix bug if dont use this last array will not show
                if (i === numItem - 1) {
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
