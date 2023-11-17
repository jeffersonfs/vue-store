<template>
  <div class="card" style="width: 18rem;">

         <slot name="image"> </slot>
    <!--<img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title"> <slot name="title"></slot> </h5>
      <p class="card-text"> <slot name="description"></slot></p>
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</template>
