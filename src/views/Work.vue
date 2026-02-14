<template>
  <v-container class="bg-transparent py-16 w-50">
    <v-card flat class="bg-transparent">
      <v-card-subtitle class="d-flex justify-end mt-5 text-h5">
        Mes projets
      </v-card-subtitle>
      <v-card-title class="d-flex justify-end mb-5 text-h4 font-weight-bold text-grey-darken-3 ">
        Une sélection de projets qui démontrent mon expertise
      </v-card-title>

      <!-- Projet 1: Coup d'Main -->
      <v-row class="mt-16 mb-16 align-center" data-aos="fade-right"
     data-aos-duration="3000">
        <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img src="../assets/poster-coupdmain.png" class="rounded-lg"></v-img>
        </v-col>

  <!-- Texte - ordre 2 sur mobile, ordre 1 sur desktop -->
        <v-col cols="12" md="6" class="order-2 order-md-1">
          <v-card flat class="bg-transparent">
            <v-card-title class="text-h5">Coup d'Main</v-card-title>
            <v-card-subtitle class="text-h6">Application mobile d'entraide</v-card-subtitle>
            <v-card-text class="text-h6">Mise en relation des personnes d'une même ville afin qu'ils puissent s'entraider: prêts d'outils, assistance aux personnes ou demande de service.</v-card-text>
            <v-card-text class="d-flex align-center ga-1 flex-wrap">
              <v-chip>React Native</v-chip>
              <v-chip>Firebase</v-chip>
              <v-chip>Node.js</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Projet 2: Gestion de réservation -->
      <v-row class="mt-16 mb-16 align-center" data-aos="fade-left" data-aos-duration="3000">
        <v-col cols="12" md="6">
          <v-img src="../assets/gestion_reservation.jpg" class="rounded-lg"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat class="bg-transparent">
            <v-card-title class="text-h5">Gestion de réservation</v-card-title>
            <v-card-subtitle class="text-h6">Application web Laravel</v-card-subtitle>
            <v-card-text class="text-h6">Application de gestion immobilières permettant de réserver des biens en ligne et aux propriétaires de gérer leur activité via un panel d'administration.</v-card-text>
            <v-card-text class="d-flex align-center ga-1 flex-wrap">
              <v-chip>Laravel</v-chip>
              <v-chip>XAMPP</v-chip>
              <v-chip>Breeze</v-chip>
              <v-chip>Blade</v-chip>
              <v-chip>Livewire</v-chip>
              <v-chip>Filament</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/itsantho/laravel-gestion-de-reservation"></v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Projet 3: Giverr -->
      <v-row class="mt-16 mb-16 align-center" data-aos="fade-right"
     data-aos-duration="3000">
         <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img src="../assets/icon.png" class="rounded-lg"></v-img>
        </v-col>

        <v-col cols="12" md="6" class="order-2 order-md-1">
          <v-card flat class="bg-transparent">
            <v-card-title class="text-h5">Giverr</v-card-title>
            <v-card-subtitle class="text-h6">Application mobile de dons</v-card-subtitle>
            <v-card-text class="text-h6">Application mobile innovante dédiée à la gestion des dons pour "France Assos Santé" et leurs associations partenaires.</v-card-text>
            <v-card-text class="d-flex align-center ga-1 flex-wrap">
              <v-chip>React Native</v-chip>
              <v-chip>TypeScript</v-chip>
              <v-chip>Spring Java</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/Francuz4520/SAE-S5-coupd-main"></v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Projet 4: N8N -->
      <v-row class="mt-16 mb-16 align-center" data-aos="fade-left" data-aos-duration="3000">
        <v-col cols="12" md="6">
          <v-img src="../assets/n8n.png" class="rounded-lg"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat class="bg-transparent">
            <v-card-title class="text-h5">N8N</v-card-title>
            <v-card-subtitle class="text-h6">Workflow/Automatisation</v-card-subtitle>
            <v-card-text class="text-h6">Automatiser la recherche d'offres d'emploi pour les utilisateurs, en fonction de leurs compétences enregistrées dans une base de données.</v-card-text>
            <v-card-text class="d-flex align-center ga-1 flex-wrap">
              <v-chip>TypeScript</v-chip>
              <v-chip>n8n</v-chip>
              <v-chip>sqlite</v-chip>
            </v-card-text>
            <v-btn density="default" icon="mdi-open-in-new" flat target="_blank" href="https://github.com/itsantho/n8n_mcp_recherche_de_stage"></v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
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
  :deep(.text-h4) {
    font-size: 1rem !important;
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }

  :deep(.text-h3) {
    font-size: 1.5rem !important;
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }

  :deep(.text-h5) {
    word-break: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
  }

  :deep(.text-h6) {
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
}
</style>
