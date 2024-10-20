<template>
  <div id="app" class="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/topo">Topo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.app {
  margin-top: 10px;
}

nav {
  margin-bottom: 20px;
}
</style>