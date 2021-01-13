<template>
  <div class="flex">
    <div class="w-1/4">
      <SideBar />
    </div>
    <div class="w-3/4 flex flex-col">
      <Navbar />
      <HomePage />
      <About class="z-10" />
      <Education class="z-10" />
      <Experience class="z-10" />
      <Projects class="z-10" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import HomePage from "@/components/HomePage.vue";
import Navbar from "@/components/Navbar.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
export default {
  name: "Home",
  components: {
    SideBar,
    HomePage,
    Navbar,
    About,
    Education,
    Experience,
    Projects
  }
};
</script>
