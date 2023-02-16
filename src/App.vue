<script setup>
import Movies from './components/Movies.vue'
</script>

<template>
  <div class="main-title">🍿 <span class="text-gradient">Organize and Enjoy Your Movies</span></div>
  <div class="content">
    <Movies></Movies>
  </div>
</template>

<style scoped>
.content {
  margin-top: 25px;
}
.main-title {
  font-size: 50px;
  text-align: center;
}

.text-gradient {
  font-weight: bolder;
  background: linear-gradient(90deg, rgba(242,12,23,1) 0%, rgba(107,23,23,1) 88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
  