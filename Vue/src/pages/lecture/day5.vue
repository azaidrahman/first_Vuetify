<!-- eslint-disable vue/block-lang -->
<template>
  <!-- ## Template Refs -->
  <!-- <input type="text" ref="inputField" />
  <v-btn @click="focusInput">Focus Input</v-btn> -->

  <!-- ## Template Refs Exercise -->
  <v-card ref="colorfulCard">
    <v-card-title>Colorful Card</v-card-title>
    <v-card-text>This card will change color</v-card-text>
  </v-card>
  <v-btn @click="changeColor">CHANGE COLOR</v-btn>
</template>

<script setup>
  // ## Template Refs
  //   const inputField = ref(null);

  //   const focusInput = () => {
  //     inputField.value?.focus();
  //   };

  // ## Template Refs Exercise

  const colorfulCard = ref(null);

  const randomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const changeColor = () => {
    const randomColor = randomRGB();
    console.log(randomColor);
    console.log(colorfulCard.value);
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (colorfulCard.value) {
      colorfulCard.value.$el.style.backgroundColor =
        randomColor;
    }
  };
</script>

<!-- <style scoped>
  .cardColor {
  }
</style> -->
