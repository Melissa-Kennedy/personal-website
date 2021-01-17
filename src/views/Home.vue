<template>
  <div class="flex font-text bg-site-main">
    <div
      class="w-0 bg-site-main transition-width duration-500 ease-in-out"
      :class="{ 'w-1/4': show_menu }"
    >
      <div
        class="opacity-0 transition-opacity delay-200 duration-500 ease-in-out"
        :class="{ 'opacity-100': show_menu }"
      >
        <SideBar :show_menu="show_menu" />
      </div>
    </div>
    <div class="w-full flex flex-col">
      <Navbar class="z-20" />
      <HomePage ref="header" />
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
  },
  data() {
    return {
      show_menu: false
    };
  },
  methods: {
    handleScroll() {
      this.show_menu = window.pageYOffset >= this.$refs.header.$el.clientHeight;
      console.log(window.pageYOffset);
      console.log(this.$refs.header.$el.clientHeight);
    }
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
