<template>
    <div class="loader">
        🍿
    </div>
</template>

<style scoped>
.loader {
    font-size: 40px;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7) !important;
    }

    70% {
      transform: scale(1.8);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0) !important;
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
    }
  }
</style>