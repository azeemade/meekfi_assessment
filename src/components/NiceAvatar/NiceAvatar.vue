<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="190" cy="190" r="190" :fill="bgColor" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="380"
      height="380"
    >
      <circle cx="190" cy="190" r="190" fill="#FFEDEF" />
    </mask>
    <g mask="url(#mask0)">
      <Face :faceColor="faceColor" :beard="beard" :beard-color="beardColor" />
      <Mouth :mouth="mouth" />
      <EyeBrows :eye-brow="eyeBrow" />
      <Hair :hair="hair" :hair-color="hairColor" />
      <Eyes :eye="eye" />
      <Glasses :glasses="glasses" />
      <Nose :nose="nose" />
      <Ear :ear="ear" :faceColor="faceColor" />
      <Earring :ear="ear" :earring="earring" />
      <Shirt :shirt="shirt" :shirt-color="shirtColor" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="200"
          height="320"
          fill="white"
          transform="translate(90 43)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
import props from "./props";
import Eyes from "./Eyes.vue";
import EyeBrows from "./EyeBrows.vue";
import Face from "./Face.vue";
import Ear from "./Ear.vue";
import Earring from "./Earring.vue";
import Mouth from "./Mouth.vue";
import Hair from "./Hair.vue";
import Nose from "./Nose.vue";
import Glasses from "./Glasses.vue";
import Shirt from "./Shirt.vue";

export default {
  name: "NiceAvatar",
  components: {
    Shirt,
    Glasses,
    Hair,
    Mouth,
    Face,
    EyeBrows,
    Eyes,
    Ear,
    Earring,
    Nose,
  },
  props,
};
</script>
