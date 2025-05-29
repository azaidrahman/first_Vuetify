<template>
  <div>
    <h3>Lifecycle Hook Messages</h3>
    <ul>
      <li v-for="(message, index) in lifecycleLog" :key="index">
        {{ message }}
      </li>
    </ul>
    <v-btn @click="triggerUpdate">Trigger Update</v-btn>
  </div>
</template>

<script setup>
  const lifecycleLog = ref([]);
  const isManualUpdate = ref(false);

  onBeforeMount(() => {
    lifecycleLog.value.push('Component is about to mount!');
  });

  onMounted(() => {
    lifecycleLog.value.push('Component is now mounted!!');
  });

  onUpdated(() => {
    if (isManualUpdate.value) {
      lifecycleLog.value.push('Component has been updated!');
    }
    isManualUpdate.value = false;
  });

  function triggerUpdate() {
    isManualUpdate.value = true;
    lifecycleLog.value.push('Manual update triggered!');
  }
</script>
