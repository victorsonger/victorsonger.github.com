<template>
  <div class="home-content">
    <button @click="changeMyMsg">修改msg</button>
    <p>{{ myMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";
const props = defineProps({
  homeMsg: Number,
});
const { homeMsg: myMsg } = toRefs(props);
const emit = defineEmits(["change-msg"]);

const changeMyMsg = () => {
  const newMsg = myMsg?.value ? myMsg.value + 1 : 0;
  // console.log("newMsg", newMsg);
  emit("change-msg", newMsg);
};
</script>

<style scoped>
.home-content {
  min-height: 30vh;
  background: #84cbd4;
  margin-bottom: 100px;
  padding: 20px;
}
</style>
