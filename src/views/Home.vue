<template>
  <div class="flex">
    <div class="w-1/4">
      <SideBar />
    </div>
    <div class="w-3/4">
      <HomePage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    HomePage
  }
};
</script>
