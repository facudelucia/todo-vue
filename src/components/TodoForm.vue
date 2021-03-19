<template>
  <form @submit.prevent="formulario">
    <div class="inputBox">
      <input
        type="text"
        class="form-control my-3 inputField"
        placeholder="Ingrese Tarea"
        v-model.trim="texto"
      />
      <button type="button" id="emoji-trigger" @click="handleClick">
        <i class="far fa-smile"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { inject, ref } from "vue";
import { EmojiButton } from "@joeattardi/emoji-button";
export default {
  setup() {
    const picker = new EmojiButton();
    const trigger = document.querySelector("#emoji-trigger");
    const input = document.querySelector(".form-control")
    picker.on("emoji", (selection) => {
      texto.value += selection.emoji;

    });
    const handleClick = (e) => {
      e.preventDefault();
      picker.togglePicker(trigger);
    };
    const todos = inject("todos");
    const texto = ref("");
    const formulario = () => {
      if (texto.value === "") {
        return;
      }
      const todo = {
        texto: texto.value,
        estado: false,
        id: Date.now(),
      };
      todos.value.push(todo);
      texto.value = "";
    };
    return {
      texto,
      formulario,
      handleClick,
    };
  },
};
</script>

<style>
.emoji-picker__wrapper{
  position: absolute;
  top: 10%;
  right: 0;
}
.inputBox{
 width: 100%;
 display: flex;
}
#emoji-trigger{
   border: none;
   background: none;
   color: gray;
  position: absolute;
    right: 0;
    margin: 30px;
}
.inputField{
   width: 100%;
   padding: 10px;
   font-size: 20px;
   font-weight: 500;
}
.form-control {
  color: white;
  background: hsl(235, 24%, 19%);
}
.form-control:focus {
  background: hsl(234, 39%, 85%);
}
</style>