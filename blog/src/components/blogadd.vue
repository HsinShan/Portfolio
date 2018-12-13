<template>
  <div id="blog-add">
    <h1>New Blog Post</h1>
    <div class="blogAddContent">
      <div class="form">
        <b-form v-if="!submitted">
          <b-form-group label="Blog Title:" label-for="title">
            <b-form-input id="title" v-model.lazy="blog.name" required></b-form-input>
          </b-form-group>
          <b-form-group label="Blog content:" label-for="content">
            <b-form-textarea v-model.lazy="blog.content" :rows="3" :max-rows="6"></b-form-textarea>
          </b-form-group>
          <b-form-group label="Author:" label-for="author">
            <b-form-input v-model.lazy="blog.author"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox-group v-model="blog.catogories">
              <b-form-checkbox value="Happy">Happy</b-form-checkbox>
              <b-form-checkbox value="Terrible">Terrible</b-form-checkbox>
              <b-form-checkbox value="Better">Better</b-form-checkbox>
              <b-form-checkbox value="Worse">Worse</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit" @click.prevent="post" v-if="!submitted" variant="primary">Submit</b-button>
          <b-button type="reset" @click="onReset" variant="danger">Reset</b-button>
        </b-form>
        <div v-if="submitted">
          <h2>Thanks for adding new blog!</h2>
        </div>
      </div>
      <div id="preview">
        <b-card :title="blog.name" tag="article" style="max-width: 20rem;" class="mb-2">
          <hr style="color:#ddd">
          <p class="card-text">{{blog.content}}</p>
          <b-button v-for="catogory in blog.catogories" :key="catogory.id">{{catogory}}</b-button>
          <p class="card-text">{{blog.author}}</p>
        </b-card>
      </div>
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
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://blog-1a09f.firebaseio.com/posts.json", this.blog)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },
    onReset(evt) {
      evt.preventDefault();
      this.blog.name = "";
      this.blog.content = "";
      this.blog.catogories = [];
      this.blog.author = "";
      this.submitted = false;
    }
  }
};
</script>

<style scoped>
#blog-add {
  margin: 50px auto;
  width: 1000px;
}
.blogAddContent {
  margin-top: 50px;
  display: flex;
  align-items: stretch;
}
.form,
#preview {
  padding: 10px 20px;
  border: 1px #ddd solid;
  width: 498px;
}
.card {
  border: none;
  width: 450px;
  margin: auto;
}
.btn-secondary {
  margin: 5px;
}
</style>
