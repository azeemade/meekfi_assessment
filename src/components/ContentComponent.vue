<template>
  <div>
    <SearchResult class="md:w-1/2" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="flex justify-between items-center mb-6">
          <p class="text-primary font-semibold md:text-lg">
            You have selected {{ currentWeather.length }} location(s)
          </p>
          <router-link to="/map" class="text-base-300 underline text-sm"
            >Add new location</router-link
          >
        </div>
        <div
          v-for="(weather, index) in currentWeather"
          :key="index"
          class="mb-3"
          @click="showChart(index)"
          :class="
            id === index ? 'bg-base-100 border-accent border rounded-md' : ''
          "
        >
          <SelectedLocationCard :weather="weather" />
        </div>
      </div>
      <div>
        <SelectedLocationChart />
      </div>
    </div>
  </div>
</template>
    <script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import SelectedLocationCard from "../components/SelectedLocationCard.vue";
import SelectedLocationChart from "../components/SelectedLocationChart.vue";
import SearchResult from "../components/SearchResult.vue";

const store = useStore();

const id = computed(() => store.state.locations.selectedIndex);

const currentWeather = computed(
  () => store.getters["locations/currentWeather"]
);

function showChart(index) {
  store.commit("locations/setSelectedIndex", index);
  store.commit("locations/setSelectedWeatherHistory", index);
}

onMounted(() => {
  // currentWeather.length > 0
  //   ? localStorage.setItem("authorized", JSON.stringify(true))
  //   : localStorage.setItem("authorized", JSON.stringify(false));
});
</script>