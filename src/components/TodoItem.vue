<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span role="button" @click="completado(todo.id)">
      <span :class="[todo.estado ? 'todoItem__text--tachado' : 'todoItem__text']">
        {{ todo.texto }}
      </span>
      <i v-if="todo.estado" class="fas fa-check"></i>
    </span>
    <span role="button" @click="eliminar(todo.id)">
      <i class="fas fa-times"></i>
    </span>
  </li>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const todos = inject("todos");
    const eliminar = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };
    const completado = (id) => {
      todos.value = todos.value.map((item) => {
        if (item.id === id) {
          item.estado = !item.estado;
        }
        return item;
      });
    };
    return {
      eliminar,
      completado,
    };
  },
};
</script>

<style>
.todoItem__text {
  margin-right: 5px;
}
.todoItem__text--tachado{
  color:gray;
}
.fa-check {
  color: green;
}
</style>