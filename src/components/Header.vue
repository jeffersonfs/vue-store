<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLoginStore } from '../stores/login.ts'

const store = useLoginStore()
const router = useRouter()

function logout(){

  store.email = ""
  store.id = ""
  store.token = ""

}

</script>

<template>
<header class="d-flex justify-content-center py-3">
 
  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-secondary">Home</router-link></li>
          <li><router-link to="/about" class="nav-link px-2 text-white">Sobre</router-link></li>
          <li><router-link to="/contact" class="nav-link px-2 text-white">Contato</router-link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div v-if="store.email === ''" class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click="router.push('/login')">Entre</button>
          <button type="button" class="btn btn-warning" @click="router.push('/cadastro')">Cadastro</button>
        </div>
        <div v-else>
          <p>{{store.email}}</p>
          <button type="button" class="btn btn-warning" @click="logout()">Sair</button>
        </div>
        <div class="md-2">
           <i class="bi bi-cart px-4 display-6"></i>
        </div>
      </div>
</header> 
</template>

<style scoped>
</style>
