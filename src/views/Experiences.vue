<template>
    <v-container> 
        <v-row class="mb-5 align-center">
            <v-col cols="12" md="3" class="d-flex justify-center">
                <v-img max-width="300" class="rounded-xl" src="../assets/IMG_2355.jpg"></v-img>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card class="rounded-xl w-100" variant="outlined" style="height: 350px;">
                    <v-card-title class="text-h4 text-center">Experience</v-card-title>
                    <v-card-subtitle class="text-h5 text-center">Développeur fullstack</v-card-subtitle>
                    <v-list>
                        <v-list-item class="text-h6 text-center">Conception d'interface d'administrations</v-list-item>
                        <v-list-item class="text-h6 text-center">Correction de la responsivité du site web</v-list-item>
                        <v-list-item class="text-h6 text-center">Développement API</v-list-item>
                        <v-list-item class="text-h6 text-center">Structuration de base de données</v-list-item>
                        <v-list-item></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="d-flex">
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