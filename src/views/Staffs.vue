<template>
  <div class="Accueil">
    <ComposantRessource
      :name="ressource.name"
      :surname="ressource.surname"
      :post="ressource.post"
    />
    <ComposantCom
      :name="commercial.name"
      :surname="commercial.surname"
      :post="commercial.post"
    />
  </div>
</template>

<script>
import ComposantCom from "../components/composantCom.vue";
import ComposantRessource from "../components/composantRessource.vue";
export default {
  name: "Staffs",
  components: {
    ComposantRessource,
    ComposantCom,
  },

  data: () => ({
    ressource: {
      name: "Podadera",
      surname: "Miguel",
      post: "assistant RH",
    },
    commercial: {
      name: "Perrier",
      surname: "Léo",
      post: "Acheteur",
    },
  }),
};
</script>
