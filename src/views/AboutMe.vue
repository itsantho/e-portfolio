<template>
    <v-container class="bg-transparent mt-16 py-16 ">
        <v-row class="d-flex justify-center align-center" data-aos="fade-right" data-aos-duration="3000">       
            <v-col cols="12" sm="12" md="2" class="d-flex justify-center">
                <v-img  class="rounded-xl"  src="../assets/IMG_2355.jpg" max-width="100%"></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="5" >
                <v-card flat class="bg-transparent">
                    <v-card-subtitle class="text-h5">À propos de moi </v-card-subtitle>
                    <v-card-title class=" text-h4 font-weight-bold text-grey-darken-3 text-break">
                        Développeur Full Stack, basé sur Paris 📍
                    </v-card-title>
                    <v-card-text class="text-h6">
                        Passionné par la création d'applications web et mobiles performantes, je conçois des solutions modernes et intuitives.
                        <br>
                        J'ai travaillé sur des projets variés, notamment des applications mobile en React Native, ainsi que des plateformes web utilisant Laravel, Vue.js et TailwindCSS. 
                        <br>
                        Curieux et rigoureux, je cherche constamment à améliorer mes compétences et à explorer de nouvelles technologies. Chaque projet est pour moi une opportunité d'apprendre, d'innover et de proposer des solutions efficaces aux besoins réels.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
       <v-container class="mb-16"> 
        <v-row class="mb-16 align-center justify-center">
            <v-col cols="12" sm="6" md="4" data-aos="zoom-in-up" data-aos-duration="5000">
                <v-card class="rounded-xl w-100" variant="outlined" style="height: 350px;">
                    <v-card-title class="text-h4 text-center">Experience</v-card-title>
                    <v-card-subtitle class="text-h5 text-center">Développeur Web</v-card-subtitle>
                    <v-list>
                        <v-list-item class="text-h6 text-center">Conception d'interface d'administrations</v-list-item>
                        <v-list-item class="text-h6 text-center">Correction de la responsivité du site web</v-list-item>
                        <v-list-item class="text-h6 text-center">Développement API</v-list-item>
                        <v-list-item class="text-h6 text-center">Structuration de base de données</v-list-item>
                        <v-list-item></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="zoom-in-up" data-aos-duration="3000">
                <v-card class="rounded-xl w-100" variant="outlined" style="overflow:hidden; height: 350px;">
                    <v-card-title class="text-h4 text-center">Formations</v-card-title>
                    <div class="d-flex justify-center">
                        <v-timeline class="mx-auto w-100" max-width="" style="max-width:320px; " align="center" side="end">
                            <v-timeline-item size="small">
                                <div class="text-center text-h6" >Bachelor Universitaire Technologique Informatique à IUT Paris rives de Seine</div>
                            </v-timeline-item>
                            <v-timeline-item size="small">
                                <div class="text-center text-h6" >Baccalauréat STI2D au Lycée Albert de Mun</div>
                            </v-timeline-item>
                        </v-timeline>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>


/* Limiter la taille de l'image sur mobile uniquement */
@media (max-width: 599px) {
  /* Réduire les tailles de police sur mobile */


  

}
</style>