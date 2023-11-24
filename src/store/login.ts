import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => ({
      email: "",
      token: "",
      id: "" 
    }),
    getters: {},
    actions: {}
})
