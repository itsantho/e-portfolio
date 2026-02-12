<script setup lang="ts">
import {mdiGithub} from "@mdi/js";
</script>

<template>
  <v-card flat class="mx-auto bg-transparent w-75" >
    <v-card-title class="d-flex mt-5 justify-center text-h3">
      Projets
    </v-card-title>
    <v-card-subtitle class="d-flex text-h6 mb-5 justify-center">
      Une sélection de projets qui démontrent mon expertise en développement full-stack.
    </v-card-subtitle>
    <v-card flat class="mx-auto">
      <v-row no-gutters class="mb-5" justify="space-evenly">
        <v-col cols="auto mb-5">
          <v-card max-width="500">
            <v-img  src="../assets/poster-coupdmain.png" ></v-img>
            <v-card-item>
              <v-card-title class="text-h5">Coup d'Main</v-card-title>
              <v-card-subtitle class="d-flex text-h6">Application mobile d'entraide</v-card-subtitle>
            </v-card-item>
          <v-card-text class="text-h6">Mise en relation des personnes d'une même ville afin qu'ils puissent s'entraider :​
              prêts d'outils, 
              assistance aux personnes ou
              demande de service. 
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip >React Native</v-chip>
              <v-chip >Firebase</v-chip>
              <v-chip >Node.js</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto mb-5">
          <v-card max-width="500" >
            <v-img src="../assets/gestion_reservation.png" ></v-img>
            <v-card-item>
              <v-card-title class="text-h5">Gestion de réservation</v-card-title>
              <v-card-subtitle class="d-flex text-h6">Application web Laravel</v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-h6">Application de gestion immobilières permettant de réserver des biens en ligne et aux propriétaires de gérer leur activité via un panel d’administration.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip >Laravel</v-chip>
              <v-chip >XAMPP</v-chip>
              <v-chip >Breeze</v-chip>
              <v-chip >Blade</v-chip>
              <v-chip >Livewire</v-chip>
              <v-chip >Filament</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/itsantho/laravel-gestion-de-reservation"></v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto mb-5">
          <v-card max-width="500">
            <v-img  src="../assets/icon.png" ></v-img>
            <v-card-item>
              <v-card-title class="text-h5">Giverr</v-card-title>
              <v-card-subtitle class="d-flex text-h6">Application mobile de dons</v-card-subtitle>
            </v-card-item>
          <v-card-text class="text-h6">Application mobile innovante dédiée à la gestion des dons pour "France Assos Santé" et leurs associations partenaires.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip >React Native</v-chip>
              <v-chip >TypeScript</v-chip>
              <v-chip >Spring Java</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto mb-5">
          <v-card max-width="500">
            <v-img  src="../assets/n8n.png" ></v-img>
            <v-card-item>
              <v-card-title class="text-h5">N8N</v-card-title>
              <v-card-subtitle class="d-flex text-h6">Workflow/Automatisation </v-card-subtitle>
            </v-card-item>
          <v-card-text class="text-h6">Automatiser la recherche d’offres d’emploi pour les utilisateurs, en fonction de leurs compétences enregistrées dans une base de données.
            </v-card-text>
            <v-card-text class="d-flex align-center ga-1">
              <v-chip >TypeScript</v-chip>
              <v-chip >n8n</v-chip>
              <v-chip >sqlite</v-chip>
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
@media (max-width: 599px) {
  /* Réduire les tailles de police sur mobile */
  :deep(.text-h4){
    font-size: 1rem !important;
    /*pour les retours à la ligne*/
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
  :deep(.text-h3) {
    font-size: 1.5rem !important;
    /*pour les retours à la ligne*/
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
  
  :deep(.text-h5) {

    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
  
  /* Réduire le padding de la card */
  :deep(.v-card-text) {
    padding: 16px !important;
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
    :deep(.text-h6) {
    /*pour les retours à la ligne*/
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }
}
</style>
