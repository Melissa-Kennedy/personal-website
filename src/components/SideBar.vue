<template>
  <div class="relative h-32 w-32 text-white">
    <div class="fixed inset-y-0 left-0 w-16 h-screen px-5 py-20">
      <div class="flex flex-col text-center">
        <div
          class="space-y-3 opacity-0 transition-opacity delay-200 duration-500 ease-in-out"
          :class="{ 'opacity-100': show_menu }"
        >
          <div>
            <i class="fas fa-phone"></i>
            <h1>416-993-2329</h1>
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            <h1>Melissa.4.Kennedy@gmail.com</h1>
          </div>
          <div>
            <i class="fab fa-linkedin"></i>
            <h1>Linkedin</h1>
          </div>
          <div>
            <i class="fab fa-github"></i>
            <h1>Github</h1>
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
