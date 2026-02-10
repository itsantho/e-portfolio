<template>
  <v-app>
    <v-main>
      <Navbar></Navbar>
      <Welcome/>
      <v-divider></v-divider>
      <AboutMe></AboutMe>    
      <v-divider></v-divider>  
      <Skills></Skills>
      <v-divider></v-divider>
      <Work></Work>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import Welcome from "@/views/Welcome.vue";
import Work from "@/views/Work.vue";
import Skills from "@/views/Skills.vue";
import AboutMe from "@/views/AboutMe.vue";
import Footer from "@/views/Footer.vue";
</script>

