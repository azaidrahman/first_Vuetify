<template>
  <v-container>
    <v-row>
      <h2>To-Do List</h2>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <v-form @sumbit.prevent="addTask"> -->
        <v-form>
          <v-text-field
            v-model="newTask"
            label="Add a new task"></v-text-field>
          <v-btn
            class="mt-2"
            color="primary"
            @click="addTask">
            Add Task
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- <v-row v-if="tasks.length > 0"> -->
    <v-row>
      <v-col cols="12">
        <v-list lines="two">
          <template v-if="tasks.length > 0">
            <v-list-item
              v-for="(task, index) in tasks"
              :key="index">
              <v-row align="center" justify="space-between">
                <v-checkbox
                  v-model="task.completed"
                  color="primary" />
                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      'text-decoration-line-through':
                        task.completed,
                    }">
                    {{ task.text }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-btn
                  @click="deleteTask(index)"
                  color="red">
                  <v-icon icon="mdi-delete"></v-icon>
                </v-btn>
              </v-row>
              <v-divider thickness="5"></v-divider>
            </v-list-item>
          </template>

          <v-row v-else>
            <v-col cols="12">
              <v-card>
                <v-card-text>
                  No tasks yet. Add one above!
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const tasks = ref([]);
  const newTask = ref('');

  const addTask = () => {
    console.log('Adding task:', newTask.value);
    if (newTask.value.trim() === '') return;
    tasks.value.push({
      text: newTask.value,
      completed: false,
    });
    console.log('Tasks:', tasks.value);
    newTask.value = '';
  };

  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };

  const completedTasks = computed(() => {
    return tasks.value.filter((task) => task.completed);
  });
</script>

<style scoped>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
</style>
