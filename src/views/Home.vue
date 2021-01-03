<template>
  <div class="flex">
    <div class="w-1/4">
      <SideBar />
    </div>
    <div class="w-3/4">
      <Navbar />
      <HomePage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import HomePage from "@/components/HomePage.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    HomePage,
    Navbar
  }
};
</script>
