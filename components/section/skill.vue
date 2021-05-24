<template>
  <div v-intersect="onIntersect">
    <div class="py-5 text-center">
      <h1>
        {{ $t('welcome').skill }} <v-chip>{{ skillShow.length }}</v-chip>
      </h1>
    </div>
    <v-scroll-y-reverse-transition>
      <v-slide-group
        v-show="isShow"
        v-model="model"
        class="custom-slide background rounded-xl mx-5"
        show-arrows
      >
        <v-slide-item v-for="(skill, n) in skillShow" :key="n">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-card
                :class="`my-${margin} mx-2 pa-5 rounded-xl text-center elevation-0`"
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
    </v-scroll-y-reverse-transition>
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
    margin() {
      return this.$vuetify.breakpoint.mdAndUp ? '4' : '3'
    },
  },
  methods: {
    onIntersect(entries, observer) {
      if (!this.isShow) {
        setTimeout(() => {
          this.isShow = entries[0].isIntersecting
          for (let i = 0; i < this.skills.length; i++) {
            ;((index) => {
              setTimeout(() => {
                this.skillShow.push(this.skills[i])
              }, i * 100)
            })(i)
          }
        }, 200)
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
