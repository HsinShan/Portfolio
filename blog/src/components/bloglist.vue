<template>
  <div v-theme:column='"narrow"' id="blog-show">
      <h1>All Blog Articles title</h1>
      <input type="text" v-model="search" placeholder="search">
      <div class="blog-block" v-for="blog in filteredBlogs" :key="blog">
          <h2><router-link v-bind:to="'/blog/'+blog.id" v-rainbow>{{blog.name | toUpperCase}}</router-link></h2>
      </div>
 
    
  </div>
  
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  data() {
    return {
      articles:[],
      search:''
    };
  },
  methods: {
    
  },
  created(){
      this.$http.get("https://blog-1a09f.firebaseio.com/posts.json").then(function(data){
        //   console.log(data.json())
         return data.json();
      }).then(function(data){
         var blogsLi=[]
         for(let key in data){
             data[key].id=key
             blogsLi.push(data[key])
         }
         this.articles=blogsLi
      })
  },
  computed:{
    //   filteredBlogs:function(){
    //       return this.articles.filter((blog)=>{
    //           return blog.title.match(this.search)
    //       });
    //   }
  },
  mixins:[searchMixin]
};
</script>

<style scoped>
#blog-show{
    max-width: 800px;
    margin:10px auto;
    padding: 20px
}
.blog-block{
    box-sizing: border-box;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background: #eee;
    border-radius: 5px;
}
.blog-block article{
    text-align: left;
}

</style>
