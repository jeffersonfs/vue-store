<template>
  <div id="app">
    <Header />
      <RouterView />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style scoped>

header {
  background-color: #7ebcd4;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

h1 {
    margin-top: 0;
}
</style>
