<script setup lang="ts">
import {mdiGithub} from "@mdi/js";

const networks = [
  { name: 'GitHub', icon: mdiGithub, url: 'https://github.com/Francuz4520/SAE-S5-coupd-main' },
]
</script>

<template>
  <v-card-title class="d-flex mt-5 justify-center text-h5 ">
    Projets
  </v-card-title>
  <v-card flat class="mx-auto mt-3 " max-width="1300">
    <v-infinite-scroll
      direction="horizontal"
      mode="manual"
      max-height="1000"
    >
      <v-row no-gutters>
        <!-- coupdmain -->
        <v-col cols="auto" class="mr-4">
          <v-card max-width="500">
            <v-img  src="../assets/poster-coupdmain.png" ></v-img>
            <v-card-item>
              <v-card-title>Coup d'Main</v-card-title>
              <v-card-subtitle class="d-flex">Application mobile d'entraide</v-card-subtitle>
            </v-card-item>
          <v-card-text>Mise en relation des personnes d'une même ville afin qu'ils puissent s'entraider :​
              prêts d'outils, 
              assistance aux personnes âgée ou
              demande de service. 
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip size="small">React Native</v-chip>
              <v-chip size="small">Firebase</v-chip>
              <v-chip size="small">TypeScript</v-chip>
              <v-chip size="small">Node.js</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
        <!-- laravel gestion-->
        <v-col cols="auto" class="mr-4">
          <v-card max-width="500" >
            <v-img src="../assets/gestion_reservation.png" ></v-img>
            <v-card-item>
              <v-card-title>Gestion de réservation</v-card-title>
              <v-card-subtitle class="d-flex">Application Laravel</v-card-subtitle>
            </v-card-item>
          <v-card-text>Application web de gestion de réservations immobilières permettant aux clients de réserver des biens en ligne et aux propriétaires de gérer l’ensemble de leur activité via un panel d’administration dédié.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip size="small">Laravel</v-chip>
              <v-chip size="small">XAMPP</v-chip>
              <v-chip size="small">Breeze</v-chip>
              <v-chip size="small">Blade</v-chip>
              <v-chip size="small">Livewire</v-chip>
              <v-chip size="small">Filament</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/itsantho/laravel-gestion-de-reservation"></v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-infinite-scroll>
  </v-card>
</template>

<style scoped>
.social-btn {
  transition: transform 0.2s;
}
.social-btn:hover {
  transform: scale(1.1);
}
</style>
