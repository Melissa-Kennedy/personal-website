<template>
  <div class="relative h-32 w-32">
    <div class="fixed inset-y-0 left-0 w-16 h-screen px-5 py-20">
      <div class="flex flex-col text-center space-y-3">
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
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
