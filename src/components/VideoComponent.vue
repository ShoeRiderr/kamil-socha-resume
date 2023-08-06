<template>
  <video autoplay muted loop id="myVideo">
    <source src="@/assets/floor_vid.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>

<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.8;
  object-fit: cover;
}
</style>
