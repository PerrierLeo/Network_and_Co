<template>
  <div class="Accueil">
    <!--accordéon ressource Humaine-->
    <h3>Ressource humaine</h3>
    <div
      v-for="(chercher, index) in ressource"
      :key="index"
      class="accordion"
      role="tablist"
    >
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-' + index" variant="info"
            >{{ chercher.name }} {{ chercher.surname }}</b-button
          >
        </b-card-header>
        <b-collapse
          :id="'accordion-' + index"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text> 💼 {{ chercher.post }}</b-card-text>
            <b-card-text> 📧 {{ chercher.mail }}</b-card-text>
            <b-card-text> 📞 {{ chercher.tel }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <!--accordéon service communication-->
    <h3>Service communication</h3>
    <div
      v-for="(chercher, index) in communication"
      :key="index"
      class="accordion2"
      role="tablist"
    >
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion2-' + index" variant="info"
            >{{ chercher.name }} {{ chercher.surname }}</b-button
          >
        </b-card-header>
        <b-collapse
          :id="'accordion2-' + index"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text> 💼 {{ chercher.post }}</b-card-text>
            <b-card-text> 📧 {{ chercher.mail }}</b-card-text>
            <b-card-text> 📞 {{ chercher.tel }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div></div>
    <!-- <ComposantRessource
      :name="ressource.name"
      :surname="ressource.surname"
      :post="ressource.post"
      :mail="ressource.mail"
      :tel="ressource.tel"
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
    />-->
  </div>
</template>

<script>
/*
import ComposantRessource from "../components/composantRessource.vue";
import ComposantCom from "../components/composantCom.vue";
import ComposantCommercial from "../components/composantCommercial.vue";
import ComposantDirection from "../components/composantDirection.vue";*/

export default {
  /*name: "Staffs",
  components: {
    ComposantRessource,
    ComposantCom,
    ComposantCommercial,
    ComposantDirection,
  },
*/
  data: () => ({
    ressource: [
      {
        name: "Benhacine",
        surname: "Houssem",
        post: "assistant RH",
        mail: "B.H@gmail.fr",
        tel: "07 50 60 70 80",
      },

      {
        name: "Perrier",
        surname: "Léo",
        post: "chargé de communication",
        mail: "P.L@gmail.fr",
        tel: "07 50 60 70 80",
      },
    ],

    communication: [
      {
        name: "Tortiello",
        surname: "Alexandre",
        post: "Acheteur",
        mail: "A.T@gmail.fr",
        tel: "07 50 60 70 80",
      },

      {
        name: "Berger",
        surname: "Emiline",
        post: "sous-directrice",
        mail: "B.E@gmail.fr",
        tel: "07 50 60 70 80",
      },
    ],
  }),
};
</script>

<style scoped>
.accordion,
.accordion2 {
  width: 25vw;
}

h3 {
  width: 25vw;
}

#accordion-8 {
  background-color: #ff715b;
}

.color {
  background-color: rgb(177, 250, 135);
}
</style>
