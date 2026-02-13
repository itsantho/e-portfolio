<template>
  <v-footer class="bg-grey-darken-4 text-white" height="auto">
    <v-container>
      <v-row align="center" justify="center" class="py-6">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="text-h6 font-weight-bold mb-2">Anthony IEM</div>
          <div class="text-body-2 text-grey-lighten-1">
            Développeur Full Stack | Paris 📍
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="text-body-2 text-grey-lighten-1">
            © 2026 Anthony IEM
          </div>
          <div class="text-caption text-grey">
            Fait avec Vue.js
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.hover-link {
  transition: opacity 0.3s ease;
}

.hover-link:hover {
  opacity: 0.7;
}
</style>