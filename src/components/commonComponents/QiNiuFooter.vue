<script setup lang="ts"></script>

<template>
  <div class="footer-container">
    <div class="footer-bg-container"></div>
    <div class="context-containers">
      <div class="power-infos" v-for="i in 10" :key="i">footer</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  position: relative;
  display: flex;
  justify-content: center;
  height: 200px;
  overflow: hidden;
  .footer-bg-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
      url('@/assets/img/banner/footer-banner.jpg');
    background-size: cover;
    background-position: 0 70%;
    opacity: 0.85;
  }

  color: #fff;
  .context-containers {
    width: 80%;
  }
}
</style>
