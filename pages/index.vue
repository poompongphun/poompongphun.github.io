<template>
  <div>
    <welcomeSection />
    <skill :skills="skills" />
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
    const skills = store.state.skills
    const projects = store.state.projects
    return { skills, projects }
  },
}
</script>
