<template>
  <v-card>
    <v-card-title>
      <slot name="title">Product Title</slot>
    </v-card-title>
    <v-card-text>
      <slot name="description">Product Description</slot>
      <br />
      <slot name="price">Product Price</slot>
    </v-card-text>

    <slot name="image">
      <v-img width="300"></v-img>
    </slot>
  </v-card>
</template>
