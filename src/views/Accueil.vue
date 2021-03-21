<template>
  <div class="accueil">
    <div class="listMember">
      <h3>Ressource Humaine</h3>
      <cardmember :service="'RH'" />
      <h3>Service Communication</h3>
      <cardmember :service="'Communication'" />
      <h3>Service Commercial</h3>
      <cardmember :service="'Commercial'" />
      <h3>Service Comptabilité</h3>
      <cardmember :service="'Comptabilité'" />
    </div>
    <div class="filActu">
      <publisher />
      <publication :profilePicture="profilePicture" />
    </div>
    <div class="widgets">
      <agenda />
      <cantine />
      <ce />
    </div>
  </div>
</template>
<script>
import cardmember from "../components/composantMember.vue";
import publisher from "../components/publisher.vue";
import Agenda from "../components/Agenda.vue";
import Cantine from "../components/Cantine.vue";
import Ce from "../components/Ce.vue";
import Publication from "../components/Publication.vue";

export default {
  name: "Accueil",
  props: ["profilePicture"],
  components: { publisher, Agenda, Cantine, Ce, Publication, cardmember },

  data: () => ({
    body: [],
    posts: [],
  }),
};
</script>

<style scoped>
.accueil {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

h3 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #737373;
  margin-top: 5vh;
  font-size: 1.5rem;
}

#accordion-8 {
  background-color: #ff715b;
}

.color {
  background-color: rgb(177, 250, 135);
}

.colortest {
  background-color: #0275d8;
}
.colortest:hover {
  background-color: #0275d8;
}

.lastname {
  text-transform: uppercase;
}
</style>
