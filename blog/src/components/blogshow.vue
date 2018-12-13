<template>
  <div v-theme="wide" id="blog-show">
    <h1>Mind Post, Post Your Mind</h1>
    <input type="text" v-model="search" placeholder="search">
    <div class="articles">
      <b-card
        :title="blog.name"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        v-for="blog in filteredBlogs"
        :key="blog"
      >
        <p class="card-text">{{blog.content | snippest}}</p>
        <b-button :href="'/blog/'+blog.id" variant="warning">See more..</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      articles: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://blog-1a09f.firebaseio.com/posts.json")
      .then(function(data) {
        //   console.log(data.json())
        return data.json();
      })
      .then(function(data) {
        var blogsLi = [];
        for (let key in data) {
          data[key].id = key;
          blogsLi.push(data[key]);
        }
        this.articles = blogsLi;
      });
  },
  computed: {
    //   filteredBlogs:function(){
    //       return this.articles.filter((blog)=>{
    //           return blog.title.match(this.search)
    //       });
    //   }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
#blog-show {
  max-width: 900px;
  margin: 10px auto;
  padding: 20px;
}
#blog-show input {
  box-sizing: border-box;
  width: 80%;
  height: 35px;
}
.articles {
  margin: 50px 10px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.card {
  width: 400px;
  margin: 20px 50px;
}
</style>
