<template>
  <!-- ## V-MODEL -->
  <!-- <v-text-field v-model="name" label="Your Name"></v-text-field>
  <p>Hello, {{ name }} !</p> -->

  <!-- ## Watchers -->
  <!-- <div>
    <button @click="counter++">Increment</button>
    <p>Counter:{{ counter }}</p>
  </div> -->

  <!-- ## Wathers Exercise -->
  <!-- <v-container>
    <v-row>
      <h2>Temperature Converter</h2>
    </v-row>
    <v-row>
      <v-col>
        <h5>Celcius</h5>
        <v-number-input
          v-model="celcius"
          v-model:focused="celciusFocus"
          :precision="2"
          :step="0.1"
        ></v-number-input>
      </v-col>
      <v-col>
        <h5>Fahrenheit</h5>
        <v-number-input
          v-model="fahrenheit"
          v-model:focused="fahrenheitFocus"
          :precision="2"
          :step="0.1"
        ></v-number-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card id="notification" cols="12" color="blue">
          <v-card-text>Last converted: {{ lastConverted }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->

  <!-- ## Class and Style Bindings -->
  <!-- <div :class="{ active: isActive, error: hasErrror }">
    Dynamic Class Example
  </div>
  <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
    Dynamic Style Example
  </div> -->

  <!-- ## Class and Style Bindings Exercise -->
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h2>Mood Tracker</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-combobox
        v-model="mood"
        :items="['Happy', 'Sad', 'Angry', 'Excited']"
        label="How are you feeling?"
      ></v-combobox>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center" cols="12" style="min-height: 60vh">
        <v-card
          class="text-center"
          :class="{ happy: isActive, sad: hasErrror }"
          style="width: 100%; height: 100%"
        >
          <v-card-title>Happy</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // ## WATCHERS
  // const counter = ref(0);
  // watch(counter, (newValue, oldValue) => {
  //   console.log('Counter changed from', oldValue, 'to', newValue);
  // });

  // ## Watcher Exercise
  //   const celcius = ref(0);
  //   const fahrenheit = ref(32);

  //   const lastConverted = ref('');
  //   const celciusFocus = ref(false);
  //   const fahrenheitFocus = ref(false);

  //   watch(celcius, (newValue, oldValue) => {
  //     if (newValue !== oldValue) {
  //       fahrenheit.value = (newValue * 9) / 5 + 32;
  //       if (celciusFocus.value && !fahrenheitFocus.value) {
  //         lastConverted.value = 'Celcius to Fahrenheit';
  //         console.log('updating from celcius', lastConverted.value);
  //       }
  //     }
  //   });

  //   watch(fahrenheit, (newValue, oldValue) => {
  //     console.log(
  //       'fahrenheit',
  //       fahrenheitFocus.value,
  //       'celcius',
  //       celciusFocus.value,
  //     );
  //     if (newValue !== oldValue) {
  //       celcius.value = ((newValue - 32) * 5) / 9;
  //       if (fahrenheitFocus.value && !celciusFocus.value) {
  //         lastConverted.value = 'Fahrenheit to Celcius';
  //         console.log('updating from fahrenheit', lastConverted.value);
  //         fahrenheitFocus.value = false;
  //       }
  //     }
  //   });

  // ## Class and Style Bindings
  //   const isActive = ref(true);
  //   const hasErrror = ref(false);

  //   const textColor = ref("blue");
  //   const fontSize = ref(24);

  //   ## Class and Style Bindings Exercise
</script>

<style scoped>
  .v-card-title {
    font-size: 3rem;
    color: v-bind(textColor);
    background-color: v-bind(bgColor);
  }
</style>
