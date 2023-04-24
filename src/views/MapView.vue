<template>
  <div>
    <div ref="chartdiv" class="w-full h-[400px]"></div>
    <div v-if="loading">
      <Loader />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Loader from "../components/Loader.vue";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const store = useStore();
const router = useRouter();

const chartdiv = ref(null);
let loading = ref(false);

// const currentWeather = computed(
//   () => store.getters["locations/currentWeather"]
// );

onMounted(() => {
  // Create root and chart
  console.log(chartdiv.value);
  let root = am5.Root.new(chartdiv.value);
  let chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoNaturalEarth1(),
    })
  );

  // Create polygon series
  let polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"],
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0x677935),
  });

  chart.events.on("click", function (ev) {
    console.log(chart.invert(ev.point));

    loading = true;
    store.dispatch("locations/getWeather", chart.invert(ev.point));
    loading = false;
    router.push("/weather");
  });
});
</script>