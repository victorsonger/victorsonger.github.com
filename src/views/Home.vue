<template>
  <div class="home">
    <HomeContent :homeMsg="msg" @change-msg="changeMsg" />
    <ion-button @click="() => router.push('/about')">About</ion-button>
    <A :c="123">aaaaaaa
      0000
      <p>sdadasd</p>
    </A>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
// import HomeContent from "@/components/HomeContent.vue";
import HomeContent from "src/components/HomeContent.vue";
import A from "src/components/A";
import { defineComponent, ref } from "vue";

import {
  // IonPage,
  IonButton,
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";

export default defineComponent({
  name: "Home",
  components: {
    // IonPage,
    HomeContent,
    IonButton,
    A
  },
  setup() {
    const router = useRouter();
    const msg = ref(1);
    const changeMsg = (newValue) => {
      console.log('newValue', newValue);
      msg.value = newValue;
    };
    onIonViewDidEnter(() => {
      console.log("Home page did enter");
    });

    onIonViewDidLeave(() => {
      console.log("Home page did leave");
    });

    onIonViewWillEnter(() => {
      console.log("Home page will enter");
    });

    onIonViewWillLeave(() => {
      console.log("Home page will leave");
    });
    return { router, msg, changeMsg };
  },
});
</script>
