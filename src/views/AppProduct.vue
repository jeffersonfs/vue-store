<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue';
const produto = ref(null);

const route = useRoute();
const id = route.params.id;

fetch("https://pc.4cc.shop/api/computador/" + id)
    .then(response => response.json())
    .then(data => produto.value = data);

</script>

<template>
<h1>Produto</h1>
<p><span>Marca :</span>{{(produto as any)?.data.attributes.marca}}</p>
</template>

<style scoped>

</style>