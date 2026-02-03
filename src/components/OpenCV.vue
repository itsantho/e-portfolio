<script setup lang="ts">

</script>

<template>
  <v-dialog max-width="500">
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
        <v-img src="../assets/CV_dev_Anthony_IEM.jpg"></v-img>
        <v-card-actions>
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
