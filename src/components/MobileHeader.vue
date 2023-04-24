<template>
  <div class="flex space-x-4 items-center justify-end">
    <div>
      <Searchbar />
    </div>
    <div>
      <Avatar class="w-10 h-10" />
    </div>
  </div>
</template>
<script setup>
import Searchbar from "../components/Searchbar.vue";
import Avatar from "../components/Avatar.vue";
</script>