<template>
  <div
    v-intersect="onIntersect"
    class="my-10 scroll-up"
    :class="{ 'scroll-up-enter': isShow }"
  >
    <div class="py-5 text-center">
      <h1>
        {{ $t('welcome').skill }} <v-chip>{{ skillShow.length }}</v-chip>
      </h1>
    </div>
    <v-slide-group
      v-model="model"
      class="custom-slide background rounded-xl mx-5 pa-1"
      show-arrows
    >
      <v-slide-item v-for="(skill, n) in skillShow" :key="n">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-card
              :ref="`skill-${n}`"
              class="my-1 mx-1 pa-5 rounded-xl text-center elevation-0 slide-left"
              :class="{ 'slide-left-enter': skill.show }"
              :height="size"
              :width="size"
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                class="mx-auto"
                width="100%"
                height="100%"
                :src="skill.img"
                contain
              ></v-img>
            </v-card>
          </template>
          <span>{{ skill.name }}</span>
        </v-tooltip>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isShow: false,
    model: null,
    skillShow: [],
  }),
  computed: {
    size() {
      return this.$vuetify.breakpoint.mdAndUp
        ? '200'
        : this.$vuetify.breakpoint.smAndUp
        ? '175'
        : '150'
    },
  },
  watch: {
    isShow(val) {
      if (val) {
        for (let i = 0; i < this.skills.length; i++) {
          ;((index) => {
            setTimeout(() => {
              this.skillShow.push(this.skills[i])
              setTimeout(() => {
                this.skillShow[i].show = true

                // fix bug if dont use this last array will not show
                if (i === this.skills.length - 1) {
                  this.$refs[`skill-${i}`][0].$el.classList.value =
                    this.$refs[`skill-${i}`][0].$el.classList.value +
                    ' slide-left-enter'
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

<style lang="scss">
.custom-slide .v-slide-group__next,
.custom-slide .v-slide-group__prev {
  position: absolute;
  z-index: 1;
  height: 100%;
  transition: 0.2s;
  i {
    color: white;
  }
  border-radius: 10px;
}
.custom-slide .v-slide-group__next {
  right: 0px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
}
.custom-slide .v-slide-group__prev {
  left: 0px;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
}
.custom-slide .v-slide-group__next--disabled,
.custom-slide .v-slide-group__prev--disabled {
  transition: 0.2s;
  opacity: 0;
}
</style>
