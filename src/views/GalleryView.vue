<template>
  <div class="gallery">
    <router-link to="/">Main</router-link>
      <router-link to="/contacts">Contacts</router-link>
    <h1>Gallery</h1>
    <div class="main-image">
      <img :src="selectedImage" alt="Gallery Image" @click="nextImage" :style="{ width: imageWidth + 'px' }">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import image1 from '@/assets/images/1111.jpg';
import image2 from '@/assets/images/2222.jpg';
import image3 from '@/assets/images/333.jpg';
import image4 from '@/assets/images/4444.jpg';
import image5 from '@/assets/images/5555.jpg';

const images = [
  image1, image2, image3, image4, image5
];

const currentImageIndex = ref(0);

const selectedImage = ref(images[currentImageIndex.value]);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  selectedImage.value = images[currentImageIndex.value];
};

// Width of the displayed images
const imageWidth = 300; // Change this value to the desired width
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image {
  margin-top: 20px;
  cursor: pointer;
}
</style>
