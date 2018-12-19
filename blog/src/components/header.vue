<template>
  <b-navbar toggleable="md" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">MindPost</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav style="margin-left:auto;">
        <b-nav-item href="/" :class="{active:path!=='/add'}">Home</b-nav-item>
        <b-nav-item href="/add" :class="{active:path==='/add'}">New Post</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      path: this.$route.path
    };
  }
};
</script>

<style scoped>
.navbar {
  background-color: #ff657a;
}
.nav-link {
  padding: 0px;
}
.nav-link:hover {
  background-color: rgb(241, 241, 241);
  color: rgb(44, 62, 80) !important;
  border-radius: 15px;
}
.navbar-dark .navbar-nav .active > .nav-link {
  background-color: rgb(241, 241, 241);
  color: rgb(44, 62, 80);
  border-radius: 15px;
}
</style>
