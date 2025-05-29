<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : 'undefined'"
        text="Hello World"
        title="Hover over me"
      ></v-card>
    </template>
  </v-hover>
</template>
