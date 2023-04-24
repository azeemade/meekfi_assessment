<script setup>
import { computed } from "vue";
import UserForm from "../components/UserForm.vue";

// const currentWeather = computed(
//   () => store.getters["locations/currentWeather"]
// );
</script>

<template>
  <main>
    <div
      class="h-screen px-4 flex grid-cols-3 gap-4 flex-col items-center justify-center md:grid md:px-0"
    >
      <div
        class="bg-primary/10 flex flex-col items-center justify-center md:h-screen"
      >
        <p class="text-4xl text-primary font-extrabold">Weathermann</p>
        <img
          src="../assets/images/weather.png"
          alt=""
          class="hidden md:block"
        />
      </div>
      <div class="col-span-2">
        <div class="md:flex flex-col items-center justify-center md:h-screen">
          <div class="flex flex-col items-center justify-center">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
