<template>
  <div>
    <div>
      <MarqueeComponent />
    </div>
    <div class="px-16">
      <HeaderComponent class="mb-8" />
      <ContentComponent />
    </div>
  </div>
</template>
<script setup>
import MarqueeComponent from "../components/MarqueeComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import ContentComponent from "../components/ContentComponent.vue";
</script>