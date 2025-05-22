<template>
  <div v-bigbig>hello world</div>
  <div bigbig>hello world</div>
  <div v-capitalize>hello world</div>
</template>

<script setup>
  defineOptions({
    directives: {
      bigbig: vCapitalize,
    },
  });
  import { vCapitalize } from '@/directives/v-bigbig.js';
</script>
