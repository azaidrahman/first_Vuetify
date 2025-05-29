<template>
  <v-list>
    <TaskItem
      v-for="task in tasks"
      :key="task"
      :task="task" />
  </v-list>
</template>

<script setup>
  import TaskItem from '../components/TaskItem.vue';

  const tasks = ref(['Learn Vue', 'Build an app']);
</script>
