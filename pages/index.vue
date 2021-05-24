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

import htmlImg from '~/assets/images/icon/html.png'
import cssImg from '~/assets/images/icon/css.png'
import jsImg from '~/assets/images/icon/js.png'
import nodejsImg from '~/assets/images/icon/nodejs.png'
import phpImg from '~/assets/images/icon/php.png'
import expressImg from '~/assets/images/icon/express.png'
import vueImg from '~/assets/images/icon/vue.png'
import nuxtImg from '~/assets/images/icon/nuxt.png'
import vuetifyImg from '~/assets/images/icon/vuetify.png'
import bootstrapImg from '~/assets/images/icon/bootstrap.png'
import mysqlImg from '~/assets/images/icon/mysql.png'
import mongodbImg from '~/assets/images/icon/mongodb.png'
export default {
  components: {
    welcomeSection,
    skill,
    project,
  },
  data: () => ({
    skills: [
      {
        img: htmlImg,
        name: 'HTML',
      },
      {
        img: cssImg,
        name: 'Cascading Style Sheets',
      },
      {
        img: jsImg,
        name: 'Javascript',
      },
      {
        img: nodejsImg,
        name: 'PHP',
      },
      {
        img: phpImg,
        name: 'Node.js',
      },
      {
        img: expressImg,
        name: 'Express.js',
      },
      {
        img: vueImg,
        name: 'Vue.js',
      },
      {
        img: nuxtImg,
        name: 'Nuxt.js',
      },
      {
        img: vuetifyImg,
        name: 'Vuetify',
      },
      {
        img: bootstrapImg,
        name: 'Bootstrap',
      },
      {
        img: mysqlImg,
        name: 'MySQL',
      },
      {
        img: mongodbImg,
        name: 'MongoDB',
      },
    ],
    projects: [
      {
        name: 'Micket',
        img: [
          'https://cdn.discordapp.com/attachments/564425976893800468/846412400093298708/unknown.png',
        ],
      },
      {
        name: 'Vet Clinic',
        img: [
          'https://cdn.discordapp.com/attachments/564425976893800468/846411630244921434/unknown.png',
        ],
      },
      {
        name: 'IMed User Manual',
        img: [
          'https://cdn.discordapp.com/attachments/564425976893800468/846411940485005323/unknown.png',
        ],
      },
      {
        name: 'ThisAnime',
        img: [
          'https://media.discordapp.net/attachments/564425976893800468/846423082277011466/unknown.png?width=954&height=589',
        ],
      },
    ],
  }),
}
</script>
