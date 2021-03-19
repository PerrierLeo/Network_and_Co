<template>
  <div class="accueil">
    <publisher @publi="pushPubli" />
    <div class="publication" v-for="(elem, index) in posts" :key="(index += 1)">
      <div class="topPost">
        <div class="user"><span>Alexandre TORTIELLO</span></div>
        <div class="postDate">{{ elem.date }}</div>
      </div>
      <div class="middlePost">
        <div class="postText">{{ elem.text }}</div>
      </div>
      <div class="bottomPost">
        <like />
      </div>
      <comments />
    </div>
    <div class="Accueil">
      <!--accordéon ressource Humaine-->
      <h3>Ressource humaine</h3>
      <div
        v-for="(chercher, index) in ressource"
        :key="(index += 2)"
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
    </div>
    <agenda />
    <cantine />
    <ce />
  </div>
</template>

<script>
import comments from "../components/Comments.vue";
import publisher from "../components/publisher.vue";
import like from "../components/Like.vue";
import Agenda from "../components/Agenda.vue";
import Cantine from "../components/Cantine.vue";
import Ce from "../components/Ce.vue";

export default {
  name: "Accueil",
  components: { publisher, like, comments, Agenda, Cantine, Ce },

  data: () => ({
    posts: [],

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

  methods: {
    /*Fonction Publier */
    pushPubli(payload) {
      let newPubli = {
        text: payload.textPublish,
      };
      this.posts.push(newPubli);
    },
  },
};
</script>

<style scoped>
.accueil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.publication {
  width: 40vw;
  margin-top: 20px;
  padding: 10px 0px 10px 0px;
  height: auto;
  overflow: hidden;
  border: 1px solid #d6d6d6;
  position: relative;
  border-radius: 6px;
  background-color: white;
}

.topPost {
  display: flex;
  margin-left: 1.5vh;
  justify-content: flex-start;
  width: 12vw;
  padding-top: 1px;
}

.middlePost {
  margin-top: 10px;
}

.bottomPost {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 1.5vh;
}

.user {
  font-weight: bold;
}

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
