<template>
  <div id="blog-single">
    <h1>{{blog.name}}</h1>
    <p style="text-align:right;">By-{{blog.author}}</p>
    <article style="text-align:left;">{{blog.content}}</article>
    <b-btn
      v-for="catogories in blog.catogories"
      :key="catogories"
      style="margin:5px;"
    >{{catogories}}</b-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://blog-1a09f.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data) {
        console.log(data);
        this.blog = data.body;
      });
  }
};
</script>

<style scoped>
#blog-single {
  box-sizing: border-box;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background: #eee;
  border-radius: 5px;
}
#blog-single article {
  text-align: left;
  height: 300px;
  line-height: 40px;
}
</style>
