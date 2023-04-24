<template>
  <div class="grid grid-cols-3 gap-4 mt-4">
    <div>
      <div>
        <img
          :src="user.weather.current.condition.icon"
          :alt="user.weather.current.condition.text"
          class="mb-3"
        />
      </div>
      <div>
        <p class="text-4xl text-primary font-bold mb-2">
          {{
            new Date(user.weather.location.localtime).getHours() < 12
              ? "Good morning "
              : new Date(user.weather.location.localtime).getHours() < 16
              ? "Good afternoon "
              : "Good evening "
          }}
          {{ user.info.name }}!
        </p>
        <p class="text-primary/50 font-medium text-lg">
          It's
          {{ moment(user.weather.location.localtime).format("dddd, MMMM Do") }}
        </p>
      </div>
    </div>
    <div></div>
    <div class="flex space-x-4 items-center justify-end">
      <div>
        <Searchbar />
        <!-- <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> -->
      </div>
      <div>
        <Avatar class="w-10 h-10" />
      </div>
    </div>
  </div>
</template>
  <script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import moment from "moment";

import Searchbar from "../components/Searchbar.vue";
import Avatar from "../components/Avatar.vue";

const store = useStore();
const user = computed(() => store.getters["users/user"]);
</script>