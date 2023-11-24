<template>
    <Header />
    <Alert v-for="a in store.alerts"
      :key='a.key'
      :type='a.type'
      :msg="a.msg" />
    <RouterView />

</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
import Alert from "./components/Alert.vue";
import { useAlertStore } from './stores/AlertStore.ts'
const store = useAlertStore()

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
