<template>
  <div class="home">
    <HomeContent msg="my github pages" />
    <ion-button @click="() => router.push('/about')">About</ion-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import HomeContent from "@/components/HomeContent.vue";
import { defineComponent } from "vue";
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
  },
  setup() {
    const router = useRouter();
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
    return { router };
  },
});
</script>
