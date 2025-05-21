<template>
  <v-container class="width-80">
    <CustomInput
      class="width-80 align-center"
      v-model="username"
      label="Username" />
    <p>Entered username: {{ username }}</p>
  </v-container>
</template>

<script setup>
  import CustomInput from '../../components/CustomInput.vue';

  const username = ref('');
</script>
