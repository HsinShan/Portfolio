import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Header from './components/header.vue'


Vue.use(VueResource)
Vue.use(VueRouter)

Vue.component('Header',Header)

const router=new VueRouter({
  routes:Routes,
  mode:'history'
})

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString().slice(2,8)
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
      el.style.maxWidth="1000px"
    }else if(binding.value=="narrow"){
      el.style.maxWidth="600px"
    }
    if(binding.arg=="column"){
      el.style.background="#ddd"
    }
  }
})

Vue.filter('snippest',function(value){
  return value.slice(0,20)+"..."
})
Vue.filter('toUpperCase',function(value){
  return value.toUpperCase()
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
