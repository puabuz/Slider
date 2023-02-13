<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="addTask">
      <textarea required="required" v-model="inputValue" placeholder="Введите текст..." />
      <button class="btn btnPrimary" type="submit">Add New Note</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(_, {emit}) {
    const inputValue = ref("");
    const addTask = () => {
      emit("addTask", inputValue);
      inputValue.value = "";
    }
    return {
      inputValue,
      addTask
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%
}
</style>