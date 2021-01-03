<template>
  <div class="relative">
    <div class="bg-main-bg bg-no-repeat bg-contain absolute top-0 left-0 w-full h-screen">
      <div class="p-16 grid grid-rows-2 grid-cols-3">
        <div>
          <img class="rounded-full" src="@/assets/melissa.jpg" alt="Headshot" />
        </div>
        <div class="col-start-2 col-span-2 row-start-2 p-8">
          <h1>Melissa Kennedy</h1>
          <p>Software Developer • Toronto, Ontario</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

