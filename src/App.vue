<template>
  <v-app>
    <v-main>
      <Welcome/>
      <v-divider></v-divider>
      <Skills></Skills>
      <v-divider></v-divider>
      <Work></Work>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import Welcome from "@/views/Welcome.vue";
import Work from "@/views/Work.vue";
import Skills from "@/views/Skills.vue"
</script>

