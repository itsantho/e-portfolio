<template>
    <v-card flat class="mx-auto mt-16 mb-16 bg-transparent w-50">
      <div data-aos="fade-right" data-aos-duration="5000">
      <v-card-subtitle class="d-flex mt-16 text-h5">
        Compétences Techniques 
      </v-card-subtitle>
      <v-card-title class="d-flex mb-5 text-h4 font-weight-bold text-grey-darken-3 text-break">
        Mon savoir-faire : développement fullstack 💻
      </v-card-title>
      </div>

      <v-card flat class="mx-auto mt-3 mb-16" >
        <v-row class="mb-5" >
          <v-col cols="12" md="6" data-aos="zoom-in-up">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">Développement Web</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>HTML/CSS</v-chip>
                <v-chip>JavaScript</v-chip>
                <v-chip>TypeScript</v-chip>
                <v-chip>PHP</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" data-aos="zoom-in-up">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">Base de données</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>MySQL</v-chip>
                <v-chip>MongoDB</v-chip>
                <v-chip>Firebase</v-chip>
                <v-chip>MariaDB</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-duration="2000">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">DevOps & outils</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>Docker</v-chip>
                <v-chip>Ansible</v-chip>
                <v-chip>CI/CD</v-chip>
                <v-chip>Gitlab</v-chip>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-duration="2000">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">Frameworks</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>Node.js</v-chip>
                <v-chip>Vue.js</v-chip>
                <v-chip>Laravel</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-duration="3000">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">Développement mobile</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>React Native</v-chip>
                <v-chip>Android Studio</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-duration="3000">
            <v-card>
              <v-card-item>
                <v-card-title class="text-h5">Développement logiciel</v-card-title>
              </v-card-item>
              <v-card-text class="d-flex align-center ga-1">
                <v-chip>Java</v-chip>
                <v-chip>Python</v-chip>
                <v-chip>C</v-chip>
                <v-chip>C++</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
      </v-row>
      </v-card>
  </v-card>

</template>

<style scoped>
  /* Réduire les tailles de police sur mobile */
  @media (max-width: 599px) {
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