<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span role="button">{{contarActivos}} tareas pendientes</span>
    <span role="button" @click="eliminarCompletados" class="footer__deleteAll"> Eliminar tareas terminadas </span>
  </li>
</template>

<script>
import { computed, inject } from "vue";
export default {
  setup() {
    const todos = inject("todos");
    const contarActivos = computed(() => {
      return todos.value.filter((item) => item.estado === false).length;
    });
    const eliminarCompletados = () => {
        todos.value = todos.value.filter(item => item.estado === false)
    }
    return {
        contarActivos,
        eliminarCompletados
    }
  },
};
</script>

<style>
.footer__deleteAll{
  font-size: 18px;
  font-weight: 600;
}
.footer__deleteAll:hover{
  color: red;
  transform: scale(0.9, 0.9);
}
</style>