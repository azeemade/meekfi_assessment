<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <MobileHeader class="block md:hidden" />
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
            new Date(moment()).getHours() < 12
              ? "Good morning "
              : new Date(moment()).getHours() < 16
              ? "Good afternoon "
              : "Good evening "
          }}
          {{ user ? user.info.name : "User" }}!
        </p>
        <p class="text-primary/50 font-medium text-lg">
          It's
          {{ moment(moment()).format("dddd, MMMM Do") }}
        </p>
      </div>
    </div>
    <div></div>
    <div class="hidden md:flex space-x-4 items-center justify-end">
      <div>
        <Searchbar />
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
import MobileHeader from "../components/MobileHeader.vue";

const store = useStore();
const user = computed(() => store.getters["users/user"]);
</script>