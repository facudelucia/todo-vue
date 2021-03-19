<template>
  <div class="card mt-3">
    <div class="card-body d-flex justify-content-between align-items-center">
      <span
        role="button"
        @click="filtrar('active')"
        :class="[estado === 'active' ? 'button__filters--active' : 'button__filters']"
      >
        Sin terminar
      </span>
      <span
        role="button"
        @click="filtrar('all')"
         :class="[estado === 'all' ? 'button__filters--active' : 'button__filters']"
      >
        Todas
      </span>
      <span
        role="button"
        @click="filtrar('complete')"
         :class="[estado === 'complete' ? 'button__filters--active' : 'button__filters']">
        Completadas
      </span>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const estado = inject("estado");

    const filtrar = (valor) => {
        console.log(valor)
      estado.value = valor;
    };
    return {
      estado,
      filtrar,
    };
  },
};
</script>

<style>
.card {
  color: white;
  background: hsl(235, 24%, 19%);
}
.button__filters {
  font-size: 18px;
  font-weight: 600;
}
.button__filters:hover {
  color:  #4D79DC;
}
.button__filters--active {
  font-size: 18px;
  font-weight: 600;
  color:  #4D79DC;
}
</style>