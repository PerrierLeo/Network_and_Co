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
      <div v-for="(elem, index) in user" :key="index">
        <b-card no-body class="mb-1 ">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colortest"
              block
              v-b-toggle="'accordion-' + index"
              variant="info"
              >{{ elem.firstname }} {{ elem.lastname }}</b-button
            >
          </b-card-header>
          <b-collapse
            :id="'accordion-' + index"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text> 💼 {{}}</b-card-text>
              <b-card-text> 📧 {{}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <!--accordéon service communication-->
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
    user: [],
  }),

  /*requette sur l'api pour recuperer les user*/
  mounted: async function() {
    const options = {
      method: "GET", // Verbe
      headers: {
        "Content-Type": "application/json", // En-tête du type de données envoyé
        Authorization: "baerer " + localStorage.getItem("token"),
      },
    };

    /* Tentative de requête */
    try {
      /* Envoi de la requête */
      const response = await fetch(
        "https://network-and-co-api.osc-fr1.scalingo.io/user/all",
        options
      );

      console.log(response); // Réponse

      const data = await response.json(); // Lire la réponse au format JSON

      this.user = data.users;
      console.log(this.user);
    } catch (error) {
      /* En cas d'erreur lors de l'exécutino de la requête */
      console.log(error);
    }
  },

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

.colortest {
  background-color: #0275d8;
}
.colortest:hover {
  background-color: #0275d8;
}
</style>
