<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    drawer.value = false; // Ferme le drawer après le clic
  }
};

const menuItems = [
  { title: 'À propos', id: 'propos' },
  { title: 'Compétences', id: 'competences' },
  { title: 'Projets', id: 'projets' },
  { title: 'Contact', id: 'contact' },
];
</script>

<template>
  <!-- Navbar principale -->
  <v-app-bar class="bg-grey-darken-4" flat elevation="2" style="z-index: 1000;">
    <v-app-bar-title class="text-white font-weight-bold">Anthony</v-app-bar-title>
    
    <v-spacer></v-spacer>
    
    <!-- Menu desktop (caché sur mobile) -->
    <div class="d-none d-md-flex">
      <v-btn 
        v-for="item in menuItems" 
        :key="item.id"
        variant="text"
        color="white"
        @click="scrollToSection(item.id)"
      >
        {{ item.title }}
      </v-btn>
    </div>
    
    <!-- Bouton burger (visible uniquement sur mobile) -->
    <v-app-bar-nav-icon 
      class="d-md-none" 
      color="white"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Navigation Drawer (Menu mobile) -->
  <v-navigation-drawer 
    v-model="drawer" 
    temporary 
    location="right"
    class="bg-grey-darken-4"
  >
    <v-list class="pt-4">
      <v-list-item 
        v-for="item in menuItems" 
        :key="item.id"
        @click="scrollToSection(item.id)"
        class="menu-item"
      >
        <v-list-item-title class="text-white text-h6">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    
    <!-- Optionnel : Divider et footer dans le menu -->
    <template v-slot:append>
      <v-divider class="bg-grey-lighten-1 mb-4"></v-divider>
      <div class="pa-4 text-center">
        <p class="text-grey-lighten-1 text-caption mb-0">
          © 2026 Anthony IEM
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
.menu-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>