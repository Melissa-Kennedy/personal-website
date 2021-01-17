<template>
  <div id="projects" class="bg-site-third p-8">
    <h1 class="font-header text-3xl">Projects</h1>

    <div class="flex mt-4">
      <div class="w-1/3 mr-2 shadow-xl">
        <img src="../assets/pantry.png" />
      </div>
      <div class="w-2/3">
        <h2 class="font-semibold text-xl">Pantry</h2>
        <p>• Recipe app using Vue.js, Django/Django Rest Framework, and Postgres</p>
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/3 mr-2 shadow-xl">
        <img alt="website" />
      </div>
      <div class="w-2/3">
        <h2 class="font-semibold text-xl">MelissaKennedy.ca</h2>
        <p>• Personal webstie built using Vue.js and Tailwind</p>
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/3 mr-2 shadow-xl">
        <img src="../assets/namaste.jpg" />
      </div>
      <div class="w-2/3">
        <h2 class="font-semibold text-xl">Namaste</h2>
        <p>• Yoga sequence builder using vue.js and Django</p>
        <p>• Submitted to the 2020 winter Hacklympics with partner</p>
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/3 mr-2 shadow-xl">
        <img src="../assets/hacktoberfest.png" />
      </div>
      <div class="w-2/3">
        <h2 class="font-semibold text-xl">HacktoberFest</h2>
        <p>• Contributed to 4 pull requests on Github</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

