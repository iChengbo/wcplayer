<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { WcPlayer } from '@wcplayer/components-vue'
</script>

<template>
  <div class="container" style="height: 720px;width: 1280px;">
    <WcPlayer muted autoplay controls src="https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4" />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 720px;
  width: 1280px;
}
</style>
