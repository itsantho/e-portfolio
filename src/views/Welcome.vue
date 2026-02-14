<script setup>
import OpenCV from "@/components/OpenCV.vue";
import Contact from "@/components/ContactButtons.vue";
import { useTheme } from 'vuetify';
import { computed } from 'vue';

const theme = useTheme();

const backgroundColor = computed(() => {
  return theme.current.value.dark ? 'bg-grey-darken-4' : 'bg-grey-lighten-4';
});

const textPrimaryColor = computed(() => {
  return theme.current.value.dark ? 'text-grey-lighten-5' : 'text-black';
});
const textSecondaryColor = computed(() => {
  return theme.current.value.dark ? 'text-grey-lighten-1' : 'text-grey-darken-3';
});
</script>

<template>
  <div class="d-flex flex-column justify-center" :class="backgroundColor" style="min-height: 100vh">
    
    <v-card flat class="mx-auto bg-transparent w-50" data-aos="fade-right" data-aos-duration="2000">
      
      <v-row class="d-flex align-center">
        <!-- Image colonne -->
        <v-col cols="6" sm="3" class="d-flex align-center mr-5 order-1 order-sm-2">
          <v-img
            src="../assets/IMG_6850.jpg"
            class="rounded-circle profile-image"
          ></v-img>
        </v-col>

        <!-- Colonne texte -->
        <v-col cols="12" sm="8" class="d-flex align-center order-2 order-sm-1">
          <v-card flat class="bg-transparent">
            <v-card-title class="text-h3">
              <span :class="textSecondaryColor">Bonjour, Je suis</span>
              <span :class="textPrimaryColor"> Anthony IEM</span>
            </v-card-title>
            <v-card-subtitle class="text-h4" >
              Développeur Fullstack
            </v-card-subtitle>
            <v-card-text class="text-h6" :class="textPrimaryColor">
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

<style scoped>
@media (max-width: 599px) {
  .profile-image {
    max-width: 200px;
    max-height: 200px;
  }
}
</style>