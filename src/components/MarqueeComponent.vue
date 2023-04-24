<template>
  <div class="bg-error flex">
    <p class="pl-4"><strong>Alerts:</strong></p>
    <marquee>
      <template v-if="alerts.length > 0" class="flex space-x-4">
        <span v-for="(alert, index) in alerts" :key="index">
          {{ alert.headline }}
        </span>
      </template>
      <template v-else>
        <span>No alerts available !</span>
      </template>
    </marquee>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const alerts = computed(() => store.getters["locations/alerts"]);
</script>