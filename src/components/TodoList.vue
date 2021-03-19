<template>
  <ul class="list-group">
    <draggable :list="todos" @change="log" >
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </draggable>
    <li class="list-group-item" v-if="todos.length === 0">
      No hay tareas pendientes
    </li>
    <todo-footer v-if="todos.length !== 0" />
    <todo-filtro />
  </ul>
</template>

<script>
import { computed, inject, provide, ref } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoFiltro from "./TodoFiltro.vue";
import { VueDraggableNext } from 'vue-draggable-next'
export default {
  components: { TodoItem, TodoFooter, TodoFiltro, draggable: VueDraggableNext, },
  setup() {
    const todosAll = inject("todos");
    const estado = ref("all");
    const todos = computed(() => {
      if (estado.value === "all") {
        return todosAll.value;
      }
      if (estado.value === "active") {
        return todosAll.value.filter((item) => item.estado === false);
      }
      if (estado.value === "complete") {
        return todosAll.value.filter((item) => item.estado === true);
      }
    });
    const log = (e) =>{
        console.log(e)
    }
    const enabled = true
    const dragging = false
    provide("estado", estado);
    return { todos, log, enabled, dragging};
  },
  /* data(){
      return{
          enabled: true,
          dragging: false,
      }
  } */
};
</script>

<style>
.list-group {
  padding: 20px;
}
.list-group-item {
  color: white;
  background: hsl(235, 24%, 19%);
}
</style>