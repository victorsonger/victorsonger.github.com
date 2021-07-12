<template>
  <div>
    <div @click="() => router.push('/')" id="home-button">Victor</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { RouterView, useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {
    // IonContent,
    // IonPage,
    RouterView,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#home-button {
  width: 5rem;
  height: 5rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgb(230, 92, 67);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.ion-page {
  top: 85px !important;
  /* height: 85vh; */
  height: calc(100vh - 85px);
  overflow: auto !important;
}
</style>
