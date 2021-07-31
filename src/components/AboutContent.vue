<template>
  <div class="about-content">
    <button @click="changeMyMsg">修改msgaaa</button>
    <p>{{ aboutMsg }}</p>
  </div>
</template>

<script lang="ts">
import { toRefs, defineComponent } from "vue";
// const emit = defineEmits(["change-msg"]);
// interface AboutContentType {
//   aboutMsg: Number;
// }

export default defineComponent(function AboutContent(props: {
  aboutMsg: Number;
}) {
  console.log("props.aboutMsg", props.aboutMsg); // 这里是undefined  其实这种定义方式（直接传setup）拿不到props

  const { aboutMsg } = toRefs(props);
  console.log("aboutMsg000", aboutMsg);
  // eslint-disable-next-line no-unused-vars
  const changeMyMsg = () => {
    // emit("change-msg");
  };
  return { aboutMsg };
});
// export default AboutContent;
</script>

<style scoped>
.about-content {
  min-height: 30vh;
  background: #84cbd4;
  margin-bottom: 100px;
  padding: 20px;
}
</style>
