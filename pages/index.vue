<template>
  <div>
    <welcomeSection />

    <div class="my-10">
      <div class="py-5 text-center">
        <h1>
          {{ $t('welcome').skill }}
          <v-chip>{{
            sections.reduce((acc, cur) => acc + cur.skills.length, 0)
          }}</v-chip>
        </h1>
      </div>
      <skill
        v-for="(section, index) in sections"
        :key="index"
        :skills="section.skills"
      />
    </div>

    <project :projects="projects" />
  </div>
</template>

<script>
import welcomeSection from '@/components/section/welcomeSection'
import skill from '@/components/section/skill'
import project from '@/components/section/project'

export default {
  components: {
    welcomeSection,
    skill,
    project,
  },
  asyncData({ store }) {
    const sections = store.state.skills
    const projects = store.state.projects
    return { sections, projects }
  },
}
</script>
