<template>
  <v-app>
    <v-app-bar color="dark" height="48">
      <v-app-bar-title class="text-h6 ms-3">
        <v-icon icon="mdi-apps"></v-icon>
        <span class="ms-1">Zaid Dashboard</span>
      </v-app-bar-title>
      <v-spacer />
      <v-btn @click="toggleTheme">Change Theme</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify';
  const theme = useTheme();
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value
      .dark
      ? 'light'
      : 'dark';
  }
</script>
