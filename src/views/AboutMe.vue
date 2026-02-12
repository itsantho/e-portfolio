<template>
    <v-card flat class="mx-auto mt-10 mb-5 bg-transparent w-80">
        <v-card-title class="d-flex mt-5 justify-center text-h3 ">
            À propos de moi 
        </v-card-title>
        <v-card-subtitle class="d-flex text-subtitle-1 mb-5 justify-center">
            Mon savoir-faire : développement fullstack, de l’interface à l’infrastructure
        </v-card-subtitle>

        <v-container> 
            <v-row class="mb-5 align-center">
                <v-col md="3" class="d-flex justify-center">
                    <v-img max-width="300" class="rounded-xl" src="../assets/IMG_2355.jpg"></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-card class="rounded-xl w-100" variant="outlined" style="height: 320px;">
                        <v-card-title class="text-h4 text-center">Experience</v-card-title>
                        <v-card-subtitle class="text-subtitle-1 text-center">Développeur fullstack</v-card-subtitle>
                        <v-list class="mb-5">
                            <v-list-item class="text-body-1 text-center">Conception d'interface d'administrations</v-list-item>
                            <v-list-item class="text-body-1 text-center">Correction de la responsivité du site web</v-list-item>
                            <v-list-item class="text-body-1 text-center">Développement API</v-list-item>
                            <v-list-item class="text-body-1 text-center">Structuration de base de données</v-list-item>
                            <v-list-item></v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="d-flex">
                    <v-card class="rounded-xl w-100" variant="outlined" style="overflow:hidden; height: 320px;">
                        <v-card-title class="text-h4 text-center">Formations</v-card-title>
                        <div class="d-flex justify-center">
                            <v-timeline class="mx-auto w-100" max-width="" style="max-width:320px; " align="center" side="end">
                                <v-timeline-item size="small">
                                    <div class="text-center text-body-1" >Bachelor Universitaire Technologique Informatique à IUT Paris rives de Seine</div>
                                </v-timeline-item>
                                <v-timeline-item size="small">
                                    <div class="text-center text-body-1" >Baccalauréat STI2D au Lycée Albert de Mun</div>
                                </v-timeline-item>
                            </v-timeline>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-card>

</template>

<style scoped>
/* Limiter la taille de l'image sur mobile uniquement */
@media (max-width: 599px) {
  /* Réduire les tailles de police sur mobile */
  :deep(.text-subtitle-1){
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
    font-size: 0.9rem !important;
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