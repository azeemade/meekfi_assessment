<template>
  <NiceAvatar
    ref="niceAvatar"
    :size="size"
    :face-color="faceColor"
    :eye="eye"
    :eye-brow="eyeBrow"
    :ear="ear"
    :earring="earring"
    :mouth="mouth"
    :hair="hair"
    :hair-color="hairColor"
    :nose="nose"
    :glasses="glasses"
    :beard="beard"
    :beard-color="beardColor"
    :shirt="shirt"
    :shirt-color="shirtColor"
    :bg-color="bgColor"
  />
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

import {
  EYES,
  EYEBROWS,
  EAR,
  EARRING,
  MOUTH,
  HAIR,
  NOSE,
  GLASSES,
  BEARD,
  SHIRT,
  SHIRT_COLORS,
  BG_COLORS,
  FACE_COLORS,
  HAIR_COLORS,
  BEARD_COLORS,
} from "../components/NiceAvatar/types";
import NiceAvatar from "../components/NiceAvatar/NiceAvatar.vue";

const data = ref({
  size: 250,
  faceColor: FACE_COLORS[0],
  eye: EYES.OVAL,
  eyeBrow: EYEBROWS.EYEBROWS_UP,
  ear: EAR.SMALL,
  earring: EARRING.NONE,
  mouth: MOUTH.LAUGHING,
  hair: HAIR.FONZA,
  hairColor: HAIR_COLORS[0],
  nose: NOSE.CURVE,
  glasses: GLASSES.NONE,
  beard: BEARD.NONE,
  beardColor: BEARD_COLORS[0],
  shirt: SHIRT.COLLARED,
  shirtColor: SHIRT_COLORS[0],
  bgColor: BG_COLORS[0],
  //   FACE_COLORS,
});

function random() {
  data.bgColor = getRandom(BG_COLORS);
  data.faceColor = getRandom(FACE_COLORS);
  data.beard = getRandom(Object.values(BEARD));
  data.beardColor = getRandom(BEARD_COLORS);
  data.eye = getRandom(Object.values(EYES));
  data.eyeBrow = getRandom(Object.values(EYEBROWS));
  data.ear = getRandom(Object.values(EAR));
  data.earring = getRandom(Object.values(EARRING));
  data.mouth = getRandom(Object.values(MOUTH));
  data.hair = getRandom(Object.values(HAIR));
  data.hairColor = getRandom(HAIR_COLORS);
  data.nose = getRandom(Object.values(NOSE));
  data.glasses = getRandom(Object.values(GLASSES));
  data.shirt = getRandom(Object.values(SHIRT));
  data.shirtColor = getRandom(SHIRT_COLORS);
}

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

onMounted(() => {
  random();
});
</script>