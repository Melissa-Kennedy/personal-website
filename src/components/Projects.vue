<template>
  <div id="projects" class="bg-site-third p-8 pr-72">
    <h1 class="font-header text-3xl">Projects</h1>

    <div class="flex mt-4">
      <div class="w-1/2 mr-6 shadow-xl">
        <img src="../assets/pantry.png" />
      </div>
      <div class="w-1/2">
        <div class="flex justify-between">
          <h2 class="font-semibold text-xl">Pantry</h2>
          <div class="flex">
            <a
              href="https://github.com/shaneikennedy/pantry"
              class="cursor-pointer transition duration-800 ease-in-out hover:text-site-accent"
            >
              <i class="fab fa-github"></i>
            </a>
            <i class="my-icons vue"></i>
            <i class="my-icons django"></i>
            <i class="my-icons postgresql"></i>
            <i class="my-icons tailwindcss"></i>
          </div>
        </div>
        <p>• Recipe app using Vue.js, Django/Django Rest Framework, Tailwind, and Postgres</p>
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/2 mr-6 shadow-xl">
        <img src="../assets/website.png" />
      </div>
      <div class="w-1/2">
        <div class="flex justify-between">
          <h2 class="font-semibold text-xl">MelissaKennedy.ca</h2>
          <div class="flex">
            <a
              href="https://github.com/Melissa-Kennedy/personal-website"
              class="cursor-pointer transition duration-800 ease-in-out hover:text-site-accent"
            >
              <i class="fab fa-github"></i>
            </a>

            <i class="my-icons vue"></i>
            <i class="my-icons tailwindcss"></i>
          </div>
        </div>
        <p>• Personal webstie built using Vue.js and Tailwind</p>
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/2 mr-6 shadow-xl">
        <img src="../assets/namaste.jpg" />
      </div>
      <div class="w-1/2">
        <div class="flex justify-between">
          <h2 class="font-semibold text-xl">Namaste</h2>
          <div class="flex">
            <a
              href="https://github.com/alexbmoreira/yoga-app"
              class="cursor-pointer transition duration-800 ease-in-out hover:text-site-accent"
            >
              <i class="fab fa-github"></i>
            </a>
            <i class="my-icons vue"></i>
            <i class="my-icons django"></i>
            <i class="my-icons postgresql"></i>
          </div>
        </div>

        <p>• Yoga sequence builder using Vue.js, Django, and Postgresql</p>
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

