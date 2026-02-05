<script setup>
import OpenCV from "@/components/OpenCV.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template >
  
  <div class="fill-height d-flex flex-column justify-center bg-grey-lighten-4">
    <v-card flat class="mx-auto bg-transparent w-90">
      <v-card-text>
        <v-row align="center">
          <!-- Colonne texte -->
          <v-col cols="8">
            <v-card-title class="text-h3">
              <span class="text-grey-darken-1">Salutation, Je suis</span> Anthony IEM
            </v-card-title>
            <v-card-subtitle class="text-h5">Développeur Fullstack & etudiant en B.U.T informatique</v-card-subtitle>
            <v-card-text class="text-h5">
              Spécialiser dans le développement FullStack, le développement mobile et concepection agile d'un produit SaaS.
            </v-card-text>
            <OpenCV></OpenCV>
            <Contact></Contact>
          </v-col>

          <v-col cols="4" class="d-flex justify-end">
            <v-img
              src="../assets/IMG_6850.jpg"
              class="rounded-circle"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
  
</template>

<script setup lang="ts">

</script>

