<script setup>
import OpenCV from "@/components/OpenCV.vue";
import Navbar from "@/components/Navbar.vue";
import Contact from "@/components/Contact.vue";
</script>

<template >
  
  <div class="d-flex flex-column justify-center bg-grey-lighten-4" style="min-height: 100vh">
    <v-card flat class="mx-auto bg-transparent ">
      <v-card-text>
        <v-row>
          <!-- Image colonne - affichée en premier sur mobile -->
          <v-col cols="6" sm="4" class="d-flex justify-center justify-sm-end order-1">
            <v-img
              src="../assets/IMG_6850.jpg"
              class="rounded-circle profile-image"
            ></v-img>
          </v-col>

          <!-- Colonne texte - affichée après sur mobile -->
          <v-col cols="12" sm="8" class="order-2 ">
            <v-card-title class="text-h3">
              <span class="text-grey-darken-1">Bonjour, Je suis</span> Anthony IEM
            </v-card-title>
            <v-card-subtitle class="text-h5">Développeur Fullstack & etudiant en B.U.T informatique</v-card-subtitle>
            <v-card-text class="text-h5">
              Spécialiser dans le développement FullStack, le développement mobile et concepection agile d'un produit SaaS.
            </v-card-text>
            <OpenCV></OpenCV>
            <Contact></Contact>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Limiter la taille de l'image sur mobile uniquement */
@media (max-width: 599px) {
  .profile-image {
    max-width: 200px;
    max-height: 200px;
  }
  
  /* Réduire les tailles de police sur mobile */
  :deep(.text-h3) {
    font-size: 1.5rem !important;
  }
  
  :deep(.text-h5) {
    font-size: 0.9rem !important;
  }
  
  /* Réduire le padding de la card */
  :deep(.v-card-text) {
    padding: 16px !important;
  }
}
</style>

