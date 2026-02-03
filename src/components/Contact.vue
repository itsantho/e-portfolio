<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLinkedin, mdiGithub, mdiEmail } from '@mdi/js'

// Liste des liens vers tes réseaux
const socials = [
  { name: 'LinkedIn', icon: mdiLinkedin, url: 'https://www.linkedin.com/in/anthony-iem-13052630b' },
  { name: 'GitHub', icon: mdiGithub, url: 'https://github.com/itsantho' },
  { name: 'Email', icon: mdiEmail, url: 'https://github.com/itsantho' },
]
</script>

<template>
    <div class=" mt-4">
      <v-btn
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        icon
        flat
        class="social-btn mx-auto bg-transparent mb-10"
      >
        <svg-icon type="mdi" :path="social.icon" size="36"/>
      </v-btn>
    </div>
</template>

<style scoped>
.social-btn {
  transition: transform 0.2s;
}
.social-btn:hover {
  transform: scale(1.1);
}
</style>



