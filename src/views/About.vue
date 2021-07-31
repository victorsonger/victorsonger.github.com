<template>
  <div class="about">
    <h1>关于页面</h1>
    <AboutContent :aboutMsg="msg" :change-msg="changeMsg"></AboutContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AboutContent from "../components/AboutContent.vue";

export default defineComponent({
  name: "About",
  components: { AboutContent },
  setup() {
    const msg = ref(1);
    const changeMsg = () => {
      msg.value += 1;
    };
    return {
      msg,
      changeMsg,
    };
  },
});
</script>
