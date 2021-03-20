<template>
  <div class="accueil">
    <div class="listMember">
      <!--accordéon ressource Humaine-->
      <h3>Ressource humaine</h3>
      <div v-for="(elem, index) in user" :key="index">
        <div v-if="elem.occupation == 'RH'">
          <b-card no-body class="mb-1 ">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                class="colortest"
                block
                v-b-toggle="'accordion-' + index"
                variant="info"
                >{{ elem.firstname }}
                <span class="lastname">{{ elem.lastname }}</span></b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> 💼 {{ elem.occupation }}</b-card-text>
                <b-card-text> 📧 {{ elem.email }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <h3>Service Communication</h3>
      <div v-for="(elem, index) in user" :key="index">
        <div v-if="elem.occupation == 'Communication'">
          <b-card no-body class="mb-1 ">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                class="colortest"
                block
                v-b-toggle="'accordion-' + index"
                variant="info"
                >{{ elem.firstname }}
                <span class="lastname">{{ elem.lastname }}</span></b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> 💼 {{ elem.occupation }}</b-card-text>
                <b-card-text> 📧 {{ elem.email }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <h3>Service Commercial</h3>
      <div v-for="(elem, index) in user" :key="index">
        <div v-if="elem.occupation == 'Commercial'">
          <b-card no-body class="mb-1 ">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                class="colortest"
                block
                v-b-toggle="'accordion-' + index"
                variant="info"
                >{{ elem.firstname }}
                <span class="lastname">{{ elem.lastname }}</span></b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> 💼 {{ elem.occupation }}</b-card-text>
                <b-card-text> 📧 {{ elem.email }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <h3>Service Comptabilité</h3>
      <div v-for="(elem, index) in user" :key="index">
        <div v-if="elem.occupation == 'Comptabilité'">
          <b-card no-body class="mb-1 ">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                class="colortest"
                block
                v-b-toggle="'accordion-' + index"
                variant="info"
                >{{ elem.firstname }}
                <span class="lastname">{{ elem.lastname }}</span></b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> 💼 {{ elem.occupation }}</b-card-text>
                <b-card-text> 📧 {{ elem.email }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <!--accordéon service communication-->
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
import publisher from "../components/publisher.vue";
import Agenda from "../components/Agenda.vue";
import Cantine from "../components/Cantine.vue";
import Ce from "../components/Ce.vue";
import Publication from "../components/Publication.vue";

export default {
  name: "Accueil",
  props: ["profilePicture"],
  components: { publisher, Agenda, Cantine, Ce, Publication },

  data: () => ({
    body: [],
    posts: [],
    user: [],
  }),

  beforeMount: async function() {
    const option = {
      method: "GET", // Verbe
      headers: {
        "Content-Type": "application/json", // En-tête du type de données envoyé
        Authorization: "baerer " + localStorage.getItem("token"),
      },
    };

    try {
      const response = await fetch(
        "https://network-and-co-api.osc-fr1.scalingo.io/user/all",
        option
      );

      console.log(response); // Réponse

      const data = await response.json(); // Lire la réponse au format JSON

      this.user = data.users;
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.widgets {
  display: flex;
  flex-direction: column;
}
.accueil {
  width: 98vw;
  display: flex;
}
.filActu {
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
  margin-right: 10vw;
}

.accordion,
.accordion2 {
  width: 25vw;
}

h3 {
  font-family: "Anton", sans-serif;
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
