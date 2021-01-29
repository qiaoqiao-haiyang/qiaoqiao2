import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//存放变量
    count:0
  },
  mutations: {//同步修改
    add(state,payload){
      console.log(payload.a,payload.b);
      state.count+=payload.b
    },
    reduce(state,payload){
      state.count-=payload
    }
  },  
  actions: {//异步修改
    reduceAction(context,payload){
      context.commit('reduce',payload)
    }
  },
  getters:{
    sum(state){
      return state.count+100;
    }
  },
  modules: {//

  }
})
