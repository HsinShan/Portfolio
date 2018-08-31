<template>
  <div id="blog-add">
    <h1>New Blog Post</h1>
    <form v-if="!submitted">
       <label for="title">Blog title:</label>
       <input type="text" v-model.lazy="blog.name" required><br>
       <label for="content">Blog content</label>
       <textarea v-model.lazy="blog.content"></textarea>
    </form>
    <div id="checkboxes" v-if="!submitted">
        <label>Happy</label>
        <input type="checkbox" value="Happy" v-model="blog.catogories">
        <label>Terrible</label>
        <input type="checkbox" value="Terrible" v-model="blog.catogories">
        <label>Better</label>
        <input type="checkbox" value="Better" v-model="blog.catogories">
        <label>Worse</label>
        <input type="checkbox" value="Worse" v-model="blog.catogories">
    </div>
    <label v-if="!submitted">Author</label>
    <select v-model="blog.author" v-if="!submitted">
        <option v-for="authorc in authors" :key="authorc.id">{{authorc}}</option>
    </select><br><br><br>
    <button @click.prevent="post" v-if="!submitted">Submit</button>
    <div v-if="submitted">
        Thanks for adding new blog!
    </div>
    <div id="preview">
        <h2>Preview</h2>
        <p>Blog title:{{blog.name}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Blog catogories:
            <ul>
                <li v-for="catogory in blog.catogories" :key="catogory.id">{{catogory}}</li>
            </ul>
        </p>
        <p>Blog author:{{blog.author}}</p>
    </div>
    
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      blog: {
        name: "",
        content: "",
        catogories: [],
        author: ""
      },
      authors: ["Shirley Hsieh", "Alice Lai", "Bob Lui"],
      submitted:false
    };
  },
  methods: {
    post: function() {
      this.$http.post("https://blog-1a09f.firebaseio.com/posts.json",this.blog).then(function(data){
          console.log(data)
          this.submitted=true
      });
    }
  }
};
</script>

<style scoped>
#blog-add * {
  box-sizing: border-box;
}
#blog-add {
  margin: 100px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px;
}
input[type="text"],
textarea {
  width: 100%;
  display: block;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px #ddd solid;
  margin: 20px auto;
}
#preview ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
#preview ul li {
  margin: 5px 25px;
  color: #999;
}
#checkboxes input {
  display: inline-block;
}
#checkboxes label {
  display: inline-block;
  margin: 10px 2px;
}
</style>
