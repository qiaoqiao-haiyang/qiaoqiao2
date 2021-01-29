import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA={
  state:{
    ma:10
  },
  mutations:{
    madd(state){
      state.ma+=5
    }
  }
}
export default new Vuex.Store({
  state: {//存放变量
    count:0,
    str:"hello",
  },
  mutations: {//同步修改
    add(state,payload){
      // console.log(payload.a,payload.b);
      state.count+=payload.b
    },
    reduce(state){
      state.count-=1
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
  modules: {//模块化
    goods:moduleA
  }
})
