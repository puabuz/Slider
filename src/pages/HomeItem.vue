<template>
  <div>
    <Form @addTask="handleSubmit" />
    <div class="notes-list">
      <p class="creatNewPlease" v-if="tasks.length == 0">Создайте свою первую заметку</p>
      <div class="note-item" v-for="(task, idx) in tasks" :key="task.id">
        <div class="note-header">
          {{ idx + 1 }}. {{ task.text }}

          <div>
            <button type="button" class="btn btnPrimary" @click="deleteTask(task.id)">DELETE</button>
            <button type="button" class="btn btnPrimary" v-if="!task.editing" @click="editTask(task.text)">
              EDIT
            </button>
          </div>
        </div>
        <div class="input_edit">
          <input type="text" v-if="task.editing" v-model="editValue" :key="task.id" />
          <div class="save_btn">
            <button type="button" class="btn btnPrimary" v-if="task.editing" @click="saveEdit(task.text)">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Form from "../components/Notes/Form-Item.vue";
export default {
  setup() {
    const editValue = ref("");
    const tasks = ref([]);
    //AddTask
    const handleSubmit = (inputValue) => {
      tasks.value.push({
        id: tasks.value.length + 1,
        text: inputValue.value.trim(),
        completed: false,
        editing: false,
      });
    };
    //DeleteTask
    const deleteTask = (taskId) => {
      tasks.value = tasks.value.filter((task) => {
        return task.id !== taskId;
      });
    };
    //EditTask
    const editTask = (taskText) => {
      editValue.value = taskText;
      tasks.value = tasks.value.map((task) => {
        if (task.text === taskText) {
          task.editing = !task.editing;
        }
        return task;
      });
    };
    //SaveTask
    const saveEdit = (taskText) => {
      if (editValue.value == "") {
        editValue.value = "Введите текст...";
        setTimeout(() => {
          editValue.value = taskText;
        }, 2000);
      } else {
        tasks.value = tasks.value.map((task) => {
          if (task.text === taskText) {
            task.text = editValue.value.trim();
            task.editing = !task.editing;
          }
          return task;
        });
      }
    };
    return {
      tasks,
      editValue,
      handleSubmit,
      deleteTask,
      editTask,
      saveEdit
    }
  },

  components: {
    Form,
  }
}
</script>

<style lang="scss">
.save_btn {
  display: flex;
  flex-flow: row wrap;
}

.input_edit {
  width: 400px;
}

.creatNewPlease {
  text-align: center;
}

.notes-list {
  padding: 40px 0;
}

.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>