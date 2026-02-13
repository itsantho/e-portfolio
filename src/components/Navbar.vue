<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<template>
  <v-toolbar class="bg-transparent position-fixed" dark flat style="z-index: 1000;">
    <v-toolbar-title>Anthony</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="scrollToSection('propos')">À propos</v-btn>
    <v-btn text @click="scrollToSection('competences')">Compétences</v-btn>
    <v-btn text @click="scrollToSection('projets')">Projets</v-btn>
    <v-btn text @click="scrollToSection('contact')">Contact</v-btn>
  </v-toolbar>
</template>

<style scoped>
</style>