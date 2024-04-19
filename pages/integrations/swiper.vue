<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        class="image-style"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://cdn.pixabay.com/photo/2020/06/17/14/50/beautiful-girl-5309854_1280.jpg"
        alt=""
        class="image-style"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        class="image-style"
      />
    </swiper-slide>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";

const swiperOption = ref({
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
</script>

<style scoped>
.image-style {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%; /* Control width here to maintain the same size for all images */
  height: auto;
  max-width: 500px; /* Set a max-width for larger screens */
}
.swiper-pagination {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}
</style>
