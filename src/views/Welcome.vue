<script setup>
import OpenCV from "@/components/OpenCV.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template >
  <div>
    <Navbar></Navbar>
    <v-divider></v-divider>
    <v-card flat class="mx-auto mt-3 bg-transparent" max-width="944">
      <v-card-text>
        <v-row align="center">
          <!-- Colonne texte -->
          <v-col cols="8">
            <v-card-title class="text-h5">
              <span class="text-grey-darken-1">Je suis</span> Anthony IEM
            </v-card-title>
            <v-card-subtitle>Développeur FullStack</v-card-subtitle>
            <v-card-text>
              Je suis actuellement en 3e de B.U.T informatique à l'IUT Paris Rives-de-Seine, <br> Je m'apprête à m'engager dans un école d'ingénieur l'année prochaine.
            </v-card-text>
            <OpenCV></OpenCV>
            <Contact></Contact>
          </v-col>

          <v-col cols="3" class="d-flex justify-end">
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

