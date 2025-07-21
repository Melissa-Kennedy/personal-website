<template>
  <div class="relative text-white">
    <div class="flex fixed left-0 w-1/5">
      <div
        class="flex flex-wrap h-screen mr-6 content-between p-5 text-3xl opacity-0 transition-opacity delay-200 duration-500 ease-in-out"
        :class="{ 'opacity-100': show_menu }"
      >
        <div class="space-y-6">
          <h1 class="hover:underline">
            <a href="#about">About</a>
          </h1>
          <h1 class="hover:underline">
            <a href="#education">Education</a>
          </h1>
          <h1 class="hover:underline">
            <a href="#experience">Experience</a>
          </h1>
          <h1 class="hover:underline">
            <a href="#projects">Projects</a>
          </h1>
        </div>
        <div class="space-y-1 text-xl">
          <div
            class="cursor-pointer transition duration-300 ease-in-out hover:text-site-accent"
          >
            <a href="tel:14169932329">
              <i class="fas fa-phone"></i>
              <h1 class="text-xs">416-993-2329</h1>
            </a>
          </div>
          <div
            class="cursor-pointer transition duration-300 ease-in-out hover:text-site-accent"
          >
            <a href="mailto:melissa.4.kennedy@gmail.com">
              <i class="fas fa-envelope"></i>
              <h1 class="text-xs">melissa.4.kennedy@gmail.com</h1>
            </a>
          </div>
          <div
            class="cursor-pointer transition duration-300 ease-in-out hover:text-site-accent"
          >
            <a href="https://github.com/Melissa-Kennedy">
              <i class="fab fa-github"></i>
              <h1 class="text-xs">Github</h1>
            </a>
          </div>
          <div
            class="cursor-pointer transition duration-300 ease-in-out hover:text-site-accent"
          >
            <a href="https://www.linkedin.com/in/melissajkennedy/">
              <i class="fab fa-linkedin"></i>
              <h1 class="text-xs">LinkedIn</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    show_menu: Boolean
  }
};
</script>
