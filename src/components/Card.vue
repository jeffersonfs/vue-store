<script setup lang="ts">
</script>


<template >
  <div class="card" style="width: 18rem;">

         <slot name="image"> </slot>
    <!--<img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title"> <slot name="title"></slot> </h5>
      <p class="card-text"> <slot name="description"></slot></p>
    </div>
    <div class="card-footer">
      <slot name="actions">
        <button type="button" class="btn btn-secondary btn-lg" disabled>Não está disponível</button>
      </slot>
    </div>
  </div>
</template>
