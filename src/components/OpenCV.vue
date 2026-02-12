<script setup lang="ts">
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = new URL('../assets/CV_dev_fullstack_Anthony_IEM.pdf', import.meta.url).href;
  link.download = 'CV_dev_fullstack_Anthony_IEM.pdf';
  link.click();
};
</script>

<template>
  <v-dialog max-width="900">
    <template v-slot:activator="{ props: activatorProps }" >
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Voir CV"
        variant="flat"
        class="mr-3"
      ></v-btn>        
      <v-btn
        text="Voir projets"
        variant="plain">
      </v-btn> 
      
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-img  src="../assets/CV_dev_Anthony_IEM.jpg"></v-img>
        <v-card-actions>
          <v-btn
            text="Télécharger"
            variant="flat"
            color="surface-variant"
            @click="downloadCV"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text="Fermer"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
