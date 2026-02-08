<script setup lang="ts">
import {mdiGithub} from "@mdi/js";

</script>

<template>
  <v-card flat class="mx-auto bg-transparent w-75" >
    <v-card-title class="d-flex mt-5 justify-center text-h3">
      Projets
    </v-card-title>
    <v-card-subtitle class="d-flex text-subtitle-1 mb-5 justify-center">Une sélection de projets qui démontrent mon expertise en développement full-stack.</v-card-subtitle>
    <v-card flat class="mx-auto">
      <v-row no-gutters class="mb-5" justify="space-evenly">
        <v-col cols="auto">
          <v-card max-width="400">
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
              <v-chip size="small">Node.js</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card max-width="400" >
            <v-img src="../assets/gestion_reservation.png" ></v-img>
            <v-card-item>
              <v-card-title>Gestion de réservation</v-card-title>
              <v-card-subtitle class="d-flex">Application web Laravel</v-card-subtitle>
            </v-card-item>
          <v-card-text>Application de gestion immobilières permettant de réserver des biens en ligne et aux propriétaires de gérer leur activité via un panel d’administration dédié.
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
        <v-col cols="auto">
          <v-card max-width="400">
            <v-img  src="../assets/icon.png" ></v-img>
            <v-card-item>
              <v-card-title>Giverr</v-card-title>
              <v-card-subtitle class="d-flex">Application mobile de dons</v-card-subtitle>
            </v-card-item>
          <v-card-text>Application mobile innovante dédiée à la gestion des dons pour "France Assos Santé" et leurs associations partenaires.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip size="small">React Native</v-chip>
              <v-chip size="small">TypeScript</v-chip>
              <v-chip size="small">Spring Java</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card max-width="400">
            <v-img  src="../assets/n8n.png" ></v-img>
            <v-card-item>
              <v-card-title>N8N</v-card-title>
              <v-card-subtitle class="d-flex">Workflow/Automatisation </v-card-subtitle>
            </v-card-item>
          <v-card-text>Automatiser la recherche d’offres d’emploi personnalisées pour les utilisateurs, en fonction de leurs compétences enregistrées dans une base de données.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip size="small">TypeScript</v-chip>
              <v-chip size="small">n8n</v-chip>
              <v-chip size="small">sqlite</v-chip>
              <v-chip size="small">IA</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
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
