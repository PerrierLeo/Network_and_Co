<template>
  <div class="Accueil">
    <ComposantRessource
      :name="ressource.name"
      :surname="ressource.surname"
      :post="ressource.post"
      :mail="ressource.mail"
    />
    <ComposantCom
      :name="com.name"
      :surname="com.surname"
      :post="com.post"
      :mail="com.mail"
    />

    <ComposantCommercial
      :name="commercial.name"
      :surname="commercial.surname"
      :post="commercial.post"
      :mail="commercial.mail"
    />

    <ComposantDirection
      :name="direction.name"
      :surname="direction.surname"
      :post="direction.post"
      :mail="direction.mail"
    />
  </div>
</template>

<script>
import ComposantDirection from "../components/composantDirection.vue";
import ComposantCommercial from "../components/composantCommercial.vue";
import ComposantCom from "../components/composantCom.vue";
import ComposantRessource from "../components/composantRessource.vue";
export default {
  name: "Staffs",
  components: {
    ComposantDirection,
    ComposantRessource,
    ComposantCom,
    ComposantCommercial,
  },

  data: () => ({
    ressource: {
      name: "Benhacine",
      surname: "Houssem",
      post: "assistant RH",
      mail: "B.H@gmail.fr",
    },
    com: {
      name: "Perrier",
      surname: "Léo",
      post: "chargé de communication",
      mail: "P.L@gmail.fr",
    },
    commercial: {
      name: "Tortellio",
      surname: "Alexandre",
      post: "Acheter",
      mail: "A.T@gmail.fr",
    },
    direction: {
      name: "Berger",
      surname: "Emiline",
      post: "sous-directrice",
      mail: "B.E@gmail.fr",
    },
  }),
};
</script>
