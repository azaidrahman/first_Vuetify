import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John',
    age: 25,
  }),
  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },
  actions: {
    // increment() {
    //   this.count++;
    // },
    haveBirthday() {
      this.age++;
    },
  },
});
