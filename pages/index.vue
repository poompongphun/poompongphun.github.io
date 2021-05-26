<template>
  <div>
    <welcomeSection />
    <skill :skills="skills" />
    <project :projects="projects" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import welcomeSection from '@/components/section/welcomeSection'
import skill from '@/components/section/skill'
import project from '@/components/section/project'

import mySkills from '~/data/mySkills.json'
import myProject from '~/data/myProject.json'
export default {
  components: {
    welcomeSection,
    skill,
    project,
  },
  data: () => ({
    skills: mySkills,
    projects: myProject,
  }),
}
</script>
