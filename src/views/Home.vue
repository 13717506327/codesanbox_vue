<template>
  <div class="my-home">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {},
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
