<template>
  <div v-if="searchResult != null" class="mb-12">
    <div class="flex justify-between items-center mb-6">
      <p class="text-primary font-semibold text-lg">
        Your search result for
        <strong>{{ searchResult.location.name }}</strong>
      </p>
      <button class="btn btn-link" @click="handleCancelSearch">
        Cancel search
      </button>
    </div>
    <div>
      <SelectedLocationCard :weather="searchResult" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

import SelectedLocationCard from "../components/SelectedLocationCard.vue";

const store = useStore();

const searchResult = computed(() => store.getters["locations/searchResult"]);

function handleCancelSearch() {
  store.commit("locations/setSearchResult", null);
}
</script>