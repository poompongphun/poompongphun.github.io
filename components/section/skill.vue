<template>
  <v-container>
    <div class="py-5 text-center">
      <h1>
        {{ $t('welcome').skill }} <v-chip>{{ skills.length }}</v-chip>
      </h1>
    </div>
    <v-slide-group v-model="model" class="elevation-1 rounded-xl" show-arrows>
      <v-slide-item v-for="(skill, n) in skills" :key="n">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-card
              class="my-5 mx-3 pa-5 rounded-xl text-center"
              height="200"
              width="200"
              v-bind="attrs"
              v-on="on"
              @click="toggle"
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    skills: [
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
        name: 'HTML',
      },
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
        name: 'Cascading Style Sheets',
      },
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        name: 'Javascript',
      },
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
        name: 'PHP',
      },
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
        name: 'Node.js',
      },
      {
        img: 'https://expressjs.com/images/express-facebook-share.png',
        name: 'Express.js',
      },
      {
        img: 'https://vuejs.org/images/logo.png',
        name: 'Vue.js',
      },
      {
        img:
          'https://d33wubrfki0l68.cloudfront.net/e0c292717c48c351fd111a53fb1c8fecbc85dc18/58284/logos/nuxt-icon.png',
        name: 'Nuxt.js',
      },
      {
        img:
          'https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png',
        name: 'Vuetify',
      },
      {
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
        name: 'Bootstrap',
      },
      {
        img: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
        name: 'MySQL',
      },
      {
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcpKOEZh1QGK1yN_WOdMKE_t3z-k2xkCssHogItR9-yqukeyjgfWZbOT1ygqZ79OyNIw&usqp=CAU',
        name: 'MongoDB',
      },
    ],
  }),
}
</script>
