import myInfo from '~/data/myInfo.json'
import mySkills from '~/data/mySkills.json'
import myProject from '~/data/myProject.json'
export const state = () => ({
  me: myInfo,
  skills: mySkills,
  projects: myProject,
})

export const getters = {
  getProjectByName(state) {
    return (name) => {
      const index = state.projects.findIndex((project) => {
        return project.name === name
      })
      return state.projects[index]
    }
  },
}
