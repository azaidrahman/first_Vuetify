<template>
  <div class="d-flex justify-center align-center ga-4 py-10 flex-column">
    <v-btn v-tooltip:start="'Tooltip at the start'">Start</v-btn>
    <v-btn v-tooltip:end="'Tooltip at the end'">End</v-btn>
    <v-btn v-tooltip:top="'Tooltip at the top'">Top</v-btn>
    <v-btn v-tooltip:bottom="'Tooltip at the bottom'">Bottom</v-btn>
    <v-btn v-tooltip:bottom-end="'Tooltip at the bottom-end'">Bottom end</v-btn>
  </div>
</template>

<style scoped>
v-btn {
  width: 33%;
}
</style>
