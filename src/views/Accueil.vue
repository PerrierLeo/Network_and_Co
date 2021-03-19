<template>
  <div class="Accueil">
    <agenda />
    <cantine />
    <ce />
  </div>
</template>

<script>
import Agenda from "../components/Agenda.vue";
import Cantine from "../components/Cantine.vue";
import Ce from "../components/Ce.vue";

export default {
  name: "Accueil",
  components: { Agenda, Cantine, Ce },
};
</script>
