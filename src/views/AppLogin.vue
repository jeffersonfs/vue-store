<script  lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '../store/login.ts'

const store = useLoginStore()
const router = useRouter()

const d_email = ref();
const d_password = ref();

async function login(){

  try {
   const response = await fetch('https://pc.4cc.shop/api/login',{
          method:  'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: d_email.value,
            password: d_password.value,
          })
        })
    const result = await response.json();
    store.id =  result["id"] 
    store.email =  result["email"] 
    store.token =  result["token"]

    router.push("/")
    console.log("Success:", result);

  } catch (error) {
    console.error("Error:", error);
  }
            //.then(response => response.json())
          //.then(data => console.log(data))


}
/*async  function login(){


  try {
    const response = await fetch("https://jogo.4cc.shop/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: {"email": d_email,
             "password": d_password
            }
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

    console.log("Login");
    console.log(d_email.value);
    console.log(d_password.value);

}*/

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

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Esqueceu a senha     ?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button @click="login()" type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Entre</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Você não tem conta ?<a href="/cadastro"
                class="link-danger">Faça o cadastro.</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 </section>
</template>
<style scoped>
</style>
