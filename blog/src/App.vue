<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import blogadd from './components/blogadd.vue';
import blogshow from './components/blogshow.vue';
import bloglist from './components/bloglist.vue';

export default {
  components:{
    'blogadd':blogadd,
    'blogshow':blogshow,
    'bloglist':bloglist
  },
  data () {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  width: 100%;
  background: rgb(48, 46, 46);
  position:absolute;
  display: flex;
  justify-content: center;
  top:0;
  left:0;
  list-style: none;
}

nav li a{
  margin:5px;
  text-decoration: none;
  color: #fff;
  width:100px;
  height: 35px;
  line-height: 35px;
  display: block;
}

.router-link-active{
  background: #999;
  border: 1px rgb(65, 65, 65) solid;
  border-radius: 5px;
}
</style>
