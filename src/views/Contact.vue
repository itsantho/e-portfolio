<template>
  <v-container class="mt-16 mb-16" id="contact">
    <v-card flat class="mx-auto w-75 bg-transparent text-center">
      <v-card-title class="d-flex justify-center mb-5 text-h4 font-weight-bold text-grey-darken-3 text-break" data-aos="fade-up">
        Contactez-moi
      </v-card-title>
      
      <v-card-subtitle class="text-h5 mb-8 text-grey-darken-1 text-break" data-aos="fade-up" data-aos-delay="100">
        Une question ? Un projet ? N'hésitez pas à me contacter !
      </v-card-subtitle>

      <v-row class="mb-16" justify="center" data-aos="fade-up" data-aos-delay="200">
        <!-- Email -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-6 text-center hover-card" elevation="2">
            <v-icon size="48" color="primary" class="mb-4">mdi-email</v-icon>
            <v-card-title class="text-h6">Email</v-card-title>
            <v-card-text>
              <a href="mailto:anthony.iempro1@gmail.com" class="text-decoration-none text-grey-darken-2">
                anthony.iempro1@gmail.com
              </a>
            </v-card-text>
          </v-card>
        </v-col>
        
        <!-- LinkedIn -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-6 text-center hover-card" elevation="2">
            <v-icon size="48" color="#0A66C2" class="mb-4">mdi-linkedin</v-icon>
            <v-card-title class="text-h6">LinkedIn</v-card-title>
            <v-card-text>
              <a href="https://www.linkedin.com/in/anthony-iem-13052630b" target="_blank" class="text-decoration-none text-grey-darken-2">
                Anthony IEM
              </a>
            </v-card-text>
          </v-card>
        </v-col>
        
        <!-- GitHub -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-6 text-center hover-card" elevation="2">
            <v-icon size="48" color="#181717" class="mb-4">mdi-github</v-icon>
            <v-card-title class="text-h6">GitHub</v-card-title>
            <v-card-text>
              <a href="https://github.com/itsantho" target="_blank" class="text-decoration-none text-grey-darken-2">
                @itsantho
              </a>
            </v-card-text>
          </v-card>
        </v-col>
        
        <!-- Téléphone (optionnel) -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-6 text-center hover-card" elevation="2">
            <v-icon size="48" color="success" class="mb-4">mdi-phone</v-icon>
            <v-card-title class="text-h6">Téléphone</v-card-title>
            <v-card-text>
              <a href="tel:+33612345678" class="text-decoration-none text-grey-darken-2">
                +33 6 98 70 18 05
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
}
</style>