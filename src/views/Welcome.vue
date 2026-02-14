<script setup>
import OpenCV from "@/components/OpenCV.vue";
import Contact from "@/components/ContactButtons.vue";
</script>

<template >
  
  <div class="d-flex flex-column justify-center bg-grey-lighten-4" style="min-height: 100vh">
    
    <v-card flat class="mx-auto bg-transparent w-50 "data-aos="fade-right" data-aos-duration="2000">
      
        <v-row class="d-flex align-center">
          <!-- Image colonne - affichée en premier sur mobile et en deuxième si grand écran -->
          <v-col cols="6" sm="3" class="d-flex align-center mr-5 order-1 order-sm-2">
            <v-img
              src="../assets/IMG_6850.jpg"
              class="rounded-circle profile-image"
            ></v-img>
          </v-col>

          <!-- Colonne texte - affichée après sur mobile -->
          <v-col cols="12" sm="8" class="d-flex align-center order-2 order-sm-1">
              <v-card flat class="bg-transparent">
                <v-card-title class="text-h3">
                  <span class="text-grey-darken-1">Bonjour, Je suis</span> Anthony IEM
                </v-card-title>
                <v-card-subtitle class="text-h4">Développeur Fullstack</v-card-subtitle>
                <v-card-text class="text-h4">
                  Spécialiser dans le développement Full-Stack, mobile et en conception agile de produit SaaS.
                </v-card-text>
                <v-card-text>
                  <OpenCV></OpenCV>
                  <Contact></Contact>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      
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
}
</style>

