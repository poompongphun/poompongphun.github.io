<template>
  <v-dialog
    v-model="dialog"
    scrollable
    transition="dialog-transition"
    width="500"
  >
    <v-card class="pa-4" rounded="xl">
      <v-btn
        icon
        absolute
        right
        aria-label="close"
        style="z-index: 1"
        @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div class="text-center">
            <h1 class="py-4">{{ $t('welcome').personal }}</h1>
            <v-avatar class="my-3" size="150" color="grey">
              <v-img src="https://www.blexar.com/avatar.png" alt="alt" />
            </v-avatar>
            <v-row align="center">
              <v-col v-for="(info, i) in personalInfo" :key="i" cols="6">
                <v-text-field
                  :label="info.type"
                  :value="info.value"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn block text @click="tab = 1">
              {{ $t('welcome').workExperience }}
              <v-icon right>mdi-chevron-double-right</v-icon>
            </v-btn>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="text-center">
            <h1 class="py-4">{{ $t('welcome').workExperience }}</h1>
            <div class="timeline">
              <v-timeline>
                <v-timeline-item
                  v-for="(work, i) in myWorkExperience"
                  :key="i"
                  :color="work.color"
                  small
                  fill-dot
                >
                  <template #opposite>
                    <span :class="`font-weight-bold ${work.color}--text`">
                      <h3>{{ work.year }}</h3>
                    </span>
                  </template>
                  <div class="py-4">
                    <v-avatar size="75" color="white">
                      <v-img :src="work.image" alt="alt" />
                    </v-avatar>
                    <div>
                      {{ work.name }}
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </div>
            <v-btn block text @click="tab = 2">
              <v-icon left>mdi-chevron-double-right</v-icon>
              {{ $t('welcome').education }}
            </v-btn>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="text-center">
            <h1 class="py-4">{{ $t('welcome').education }}</h1>
            <div class="timeline">
              <v-timeline>
                <v-timeline-item
                  v-for="(edu, i) in myEducation"
                  :key="i"
                  :color="edu.color"
                  small
                  fill-dot
                >
                  <template #opposite>
                    <span :class="`font-weight-bold ${edu.color}--text`">
                      <h3>{{ edu.year }}</h3>
                    </span>
                  </template>
                  <div class="py-4">
                    <v-avatar size="75" color="white">
                      <v-img :src="edu.image" alt="alt" />
                    </v-avatar>
                    <div>
                      {{ edu.name }}
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </div>
            <v-btn block text @click="tab = 0">
              <v-icon left>mdi-chevron-double-left</v-icon>
              {{ $t('welcome').personal }}
            </v-btn>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    tab: 0,
  }),
  computed: {
    personalInfo() {
      return this.$i18n.locale === 'th'
        ? this.$store.state.me.th.personalInfo
        : this.$store.state.me.en.personalInfo
    },
    myEducation() {
      return this.$i18n.locale === 'th'
        ? this.$store.state.me.th.education
        : this.$store.state.me.en.education
    },
    myWorkExperience() {
      return this.$i18n.locale === 'th'
        ? this.$store.state.me.th.workExperience
        : this.$store.state.me.en.workExperience
    },
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
  },
}
</script>

<style lang="scss">
.timeline {
  height: calc(100vh - 250px);
  overflow: auto;
}
</style>
