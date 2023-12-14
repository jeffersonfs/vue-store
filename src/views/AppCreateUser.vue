<script setup lang="ts">
import { ref } from 'vue';

import { useRoute } from 'vue-router'
const d_email = ref();
const d_password = ref();

const route = useRoute()
async function createUser(){

  try {

    let body =  JSON.stringify({
        "data": 
             { 
                "type": "user",
                "attributes": {
                  "email": d_email.value,
                  "password": d_password.value
                }
             }
          });

    const response = await fetch("https://jogo.4cc.shop/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    
    });
    const result = await response.json();
    console.log("Success:", result);
    router.push('/login')   
  } catch (error) {
    console.error("Error:", error);
  }

}



</script>

<template>

<section class="vh-100 mt-5">
  <div class="container-fluid h-custom ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <form>
          
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input v-model="d_email"  type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Entre com um email válido" />
            <label class="form-label" for="form3Example3">Email</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input v-model="d_password" type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Entre com a senha" />
            <label class="form-label" for="form3Example4">Senha</label>
          </div>


          <div class="text-center text-lg-start mt-4 pt-2">
            <button @click="createUser()" type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Finalizar</button>
          </div>

        </form>
      </div>
    </div>
  </div>
 </section>

</template>
