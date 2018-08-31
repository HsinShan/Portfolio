<template>
  <div id="blog-single" v-theme="'narrow'">
      <h1>{{blog.name}}</h1>
      <article>{{blog.content}}</article>
      <p>Author:{{blog.author}}</p>
      <ul>
          <li v-for="catogories in blog.catogories" :key="catogories">{{catogories}}</li>
      </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
        id:this.$route.params.id,
        blog:{}
      
    };
  },
  methods: {
   
  },
  created(){
      this.$http.get("https://blog-1a09f.firebaseio.com/posts/"+this.id+".json").then(function(data){
          console.log(data)
         this.blog=data.body
      })
  }
};
</script>

<style scoped>
#blog-single{
    box-sizing: border-box;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background: #eee;
    border-radius: 5px;
}
#blog-single article{
    text-align: center;
}
#blog-single ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
#blog-single ul li {
  margin: 5px 25px;
  color: #999;
}
</style>
