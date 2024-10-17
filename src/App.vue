<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/topo">Topo</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  nav {
    margin-bottom: 20px;
  }
  </style>
  