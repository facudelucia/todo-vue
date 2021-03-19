<template>
<div class="main">
    <div class="title">
        T O D O
    </div>
    <todo-form />
</div>
  
  <todo-list id="lista"/>
</template>

<script>
import { provide, ref, watchEffect } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default {
  components: { TodoForm, TodoList },
  setup() {
    const todos = ref([]);
    provide("todos", todos);
    if (localStorage.getItem("todos")) {
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }
    watchEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    });
  },
};
</script>

<style>
.main{
    background-image: url("../assets/bg-desktop-dark.jpg");
    padding: 20px;
}
.title{
    color:white;
    font-size: 32px;
    font-weight: 700;
}
body{
    background: hsl(235, 21%, 11%);
}
</style>