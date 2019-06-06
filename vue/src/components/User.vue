<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view/>
    <router-view name="helper"/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log(to.path, from.path);
  }
};
</script>

