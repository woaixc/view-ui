import Vue from 'vue'
import Vuex, { Store } from 'vuex'
  
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    student: [
      {name:"xiecong",age:18,height:1.88},
      {name:"xiecong1",age:188,height:1.88},
      {name:"xiecong2",age:1888,height:1.88},
      {name:"xiecong3",age:18888,height:1.88},
      {name:"xiecong4",age:188888,height:1.88}
    ]
  },
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementNum(state,payload){
      state.counter+=payload.count,
      console.log(payload.payload)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: { 
    students(state){
      return state.student.filter(s=> {
        return s.age>=18
      })
    }
  }
})
