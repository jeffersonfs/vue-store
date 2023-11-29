
<script lang="ts" setup>
const props = defineProps(['key', 'msg', 'type'])


import { useAlertStore } from '../stores/AlertStore.ts'

const store = useAlertStore()



</script>

<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <p>{{msg}}</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>
