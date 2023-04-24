<template>
  <div class="flex flex-col space-y-4 border border-zinc-200 rounded-xl p-4">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        class="input input-bordered w-80 md:w-96 placeholder:text-sm"
        v-model="user.name"
      />
      <span class="text-error text-sm">{{ error.name }}</span>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        class="input input-bordered w-80 md:w-96 placeholder:text-sm"
        v-model="user.email"
      />
      <span class="text-error text-sm">{{ error.email }}</span>
    </div>
    <div class="flex justify-center items-center">
      <button class="btn btn-primary" @click="handleSubmit()">Continue</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

const user = ref({
  name: "",
  email: "",
});

const error = ref({
  name: "",
  email: "",
});

function handleSubmit() {
  if (!user.value.name) {
    error.value.name = "Name is required!";
  } else if (!user.value.email) {
    error.value.email = "Email is required!";
  } else {
    error.value.name = error.value.email = "";

    store.dispatch("users/getUser", {
      email: user.value.email,
      name: user.value.name,
    });

    router.push("/map");
  }
}
</script>