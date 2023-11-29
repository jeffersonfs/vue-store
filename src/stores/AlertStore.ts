import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alerts",
  state: () => ({
    alerts: [],
  }),
  getters: {
    alertByType(state){

      return (type) => (
          state.alerts.find(a => (a as any).type == type)

      )

    }

  },
  actions: {

    addAlert(msg:string, type:string){
      this.alerts.push({'msg': msg, 'type':type})
    }

  }

});
