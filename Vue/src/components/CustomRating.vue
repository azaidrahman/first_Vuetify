<template>
  <v-container>
    <v-card>
      <v-card-title>
        Rate this product
        <v-card-text>
          <v-rating
            hover
            v-model="internalValue"
            color="yellow"
            active="blue"
            :label="label"></v-rating>
        </v-card-text>
      </v-card-title>
      <v-card-subtitle>
        Current Rating: {{ modelValue }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Rating',
    },
  });
  const emit = defineEmits(['update:modelValue']);

  const internalValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>
