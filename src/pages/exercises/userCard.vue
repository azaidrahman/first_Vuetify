<template>
  <v-list>
    <UserCard
      v-for="user in users"
      :key="user.email"
      :email="user.email"
      :userName="user.userName"
      :age="user.age" />
  </v-list>
</template>

<script setup>
  import UserCard from '../../components/UserCard.vue';

  const users = ref([
    {
      userName: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      userName: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
  ]);
</script>
