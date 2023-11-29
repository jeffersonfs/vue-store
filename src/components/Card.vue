<template >
  <div class="card" style="width: 18rem;">

         <slot name="image"> </slot>
    <!--<img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <slot name="id"></slot>
      <h5 class="card-title"> <slot name="title"></slot> </h5>
      <p class="card-text"> <slot name="description"></slot></p>
    </div>
    <div class="card-footer">
      <router-link :to="'/addToCart/'  + str(this)" class="btn btn-primary">Comprar</router-link>
      
    </div>
  </div>
</template>
