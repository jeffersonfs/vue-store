<script setup lang="ts">
import Card from '../components/Card.vue';
import { computed, ref } from 'vue';
const produtos = ref(null);



function getImgUrl(idImg: string) {
  const urlbase = 'https://storage.googleapis.com/webclass_imgs/leandro/imagens/';
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}


fetch("https://pc.4cc.shop/api/computador")
    .then(response => response.json())
    .then(data => produtos.value = data);


</script>

<template>

<div class="container text-center ">
 <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
    <Card v-for="p in (produtos as any)?.data">
      <template #id>{{(p as any)?.id}}</template>
      <template #title>{{(p as any)?.attributes.marca}}</template>
      <template #description>{{(p as any)?.attributes.modelo}}</template>

      <template #image>
        <img :src="getImgUrl((p as any)?.attributes.imagem)"  
            class="card-img-top h-auto" 
            :alt="(p as any)?.attributes.modelo" />
      </template>
    </Card>
 </div>
</div>

</template>
