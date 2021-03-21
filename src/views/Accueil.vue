<template>
  <div class="accueil">
    <div class="listMember">
      <h3>Ressource Humaine</h3>
      <cardmember :service="'RH'" />
      <h3 class="marginTop">Service Communication</h3>
      <cardmember :service="'Communication'" />
      <h3 class="marginTop">Service Commercial</h3>
      <cardmember :service="'Commercial'" />
      <h3 class="marginTop">Service Comptabilité</h3>
      <cardmember :service="'Comptabilité'" />
    </div>
    <div class="filActu">
      <publisher />
      <div class="scroller">
        <publication :profilePicture="profilePicture" />
      </div>
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
.scroller {
  width: 100%;
  height: 150vh;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}

.accueil {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.list-member {
  justify-content: flex-start;
}
.marginTop {
  margin-top: 3vh;
}

h3 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #303030;

  font-size: 1.5rem;
  align-items: flex-start;
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
