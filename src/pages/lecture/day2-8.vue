<template>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
  <v-btn v-tooltip="Tooltip" text="bar">foo</v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>
