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


fetch("https://pc.4cc.shop/api/computador/1")
    .then(response => response.json())
    .then(data => produtos.value = data);


</script>

<template>
<div class="container">
 <div class="card-group">
    <Card>

      <template #title>{{(produtos as any)?.data.attributes.marca}}</template>
      <template #description>{{(produtos as any)?.data.attributes.modelo}}</template>

      <template #image>
          <img :src="getImgUrl((produtos as any)?.data.attributes.imagem)"  
               class="card-img-top" 
               :alt="(produtos as any)?.data.attributes.modelo" />
      </template>
    </Card>
</div>

</div>
</template>


