<template>
  <div>
    <div class="flex flex-col items-end">
      <label for="date" class="uppercase">History</label>
      <input
        type="date"
        id="date"
        v-model="selectedDate"
        @input="handleChange"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5"
      />
    </div>
    <div>
      <Line :data="datasetCollection" :options="options" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const store = useStore();

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
});
const selectedDate = ref(moment().format("yyyy-MM-dd"));

const datasetCollection = computed(
  () => store.getters["locations/selectedWeatherHistory"]
);

const weatherHistory = computed(
  () => store.getters["locations/weatherHistory"]
);

const index = computed(() => store.state.locations.selectedIndex);

function handleChange() {
  let q = weatherHistory.value[index.value].location.name;
  store.dispatch("locations/getWeatherHistory", {
    dt: selectedDate.value,
    q: q,
    key: "f3dfa3e1bb9643548fc165750232204",
    filter: true,
  });
}
</script>