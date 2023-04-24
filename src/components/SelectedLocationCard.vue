<template>
  <div class="flex justify-between items-center border rounded-lg p-6">
    <div class="flex space-x-3 items-center">
      <div>
        <img
          :src="weather.current.condition.icon"
          :alt="weather.current.condition.text"
        />
      </div>
      <div class="text2xl md:text-3xl text-secondary-content">
        <p>{{ weather.current.temp_c }}°C</p>
      </div>
      <div class="text-xs text-accent-content">
        <p>Precipitation: {{ weather.current.precip_in }}in</p>
        <p>Humidity: {{ weather.current.humidity }}%</p>
        <p>Wind: {{ weather.current.wind_kph }}kph</p>
        <p>Pressure: {{ weather.current.pressure_in }}in</p>
        <p>UV: {{ weather.current.uv }}</p>
      </div>
    </div>
    <div class="text-end">
      <div class="text-secondary-content text-sm">
        <p>{{ weather.location.name }}, {{ weather.location.country }}</p>
      </div>
      <div class="text-sm text-accent-content">
        <p>{{ weather.location.localtime }}</p>
      </div>
      <div class="text-sm text-accent-content">
        <p>{{ weather.current.condition.text }}</p>
      </div>
    </div>
  </div>
</template>
    <script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps(["weather"]);
const store = useStore();
const user = computed(() => store.getters["users/user"]);
</script>