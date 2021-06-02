<template>
  <div :style="{ 'height:100vh': !$vuetify.breakpoint.smAndDown }">
    <v-row
      class="fill-height"
      :align="$vuetify.breakpoint.xs ? '' : 'center'"
      justify="center"
      no-gutters
    >
      <v-col cols="12" md="7">
        <previewImg :images="project.img" />
      </v-col>
      <v-col cols="12" md="5" class="pa-3">
        <div class="d-flex">
          <h1>{{ $t('project').project }}: {{ project.name }}</h1>
          <v-spacer></v-spacer>
          <v-btn
            v-if="project.github"
            class="mr-2"
            color="background"
            :href="project.github"
            target="_blank"
            rel="noopener"
            right
            depressed
            fab
            small
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            v-if="project.link"
            class="mr-2"
            color="background"
            :href="project.link"
            target="_blank"
            rel="noopener"
            right
            depressed
            fab
            small
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
        <div v-if="project.description.en !== ''">
          {{
            $i18n.locale === 'th'
              ? project.description.th
              : project.description.en
          }}
        </div>
        <div v-else>
          {{ $t('project').noDescription }}
        </div>
        <div v-if="project.tools.length > 0" class="my-2">
          <v-divider></v-divider>
          <h4 class="my-2">{{ $t('project').tools }}</h4>
          <v-chip
            v-for="tool in project.tools"
            :key="tool"
            class="mr-1 mb-1"
            small
          >
            {{ tool }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import previewImg from '@/components/carosel/previewImg'
export default {
  components: {
    previewImg,
  },
  asyncData({ store, params }) {
    const project = store.getters.getProjectByName(
      params.name.split('-').join(' ')
    )
    return { project }
  },
}
</script>
