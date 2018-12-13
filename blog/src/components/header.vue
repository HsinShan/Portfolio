<template>
  <b-navbar toggleable="md" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">MindPost</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/add">New Post</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {}
};
</script>

<style scoped>
.navbar {
  background-color: #ff657a;
}
.nav-link {
  padding: 0px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  border-bottom: 3px solid #4fb99f;
}
</style>
