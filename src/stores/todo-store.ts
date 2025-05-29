import {defineStore} from 'pinia';

export const useTodoStore = defineStore('todo', {
    state : () => ({
        todos : [],
    }),
    getters: {
        completedTodos: (state) => {
            return state.todos.filter(todo => todo.completed);
        },
        incompleteTodos: (state) => {
            return state.todos.filter(todo => !todo.completed);
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        }
        removeTodo(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId);
        }
    },
})