<script setup lang="ts">
// Liste des liens vers tes réseaux
const socials = [
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/anthony-iem-13052630b', color: '#0A66C2' },
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/itsantho', color: '#181717' },
  { name: 'Email', icon: 'mdi-email', url: 'mailto:anthony.iempro1@gmail.com', color: '#EA4335' },
]
</script>

<template>
    <div class="mt-4">
      <v-btn
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        :target="social.name !== 'Email' ? '_blank' : undefined"
        icon
        flat
        class="social-btn mx-auto bg-transparent"
      >
        <v-icon :color="social.color" size="36">{{ social.icon }}</v-icon>
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