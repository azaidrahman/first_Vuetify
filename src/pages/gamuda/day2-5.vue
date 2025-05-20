<!-- Transitions -->
<template>
  <div class="text-center">
    <v-menu transition="fade-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">Fade Transition</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title v-text="'Hello'"></v-list-item-title>
          <v-list-item-title v-text="'World'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
