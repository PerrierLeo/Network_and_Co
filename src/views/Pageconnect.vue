<template>
  <div class="Accueil">
    <div>
      <inscription
        v-if="state == 'noconnect'"
        @ajouter="callAjouter"
      ></inscription>
      <connexion v-if="state == 'connect'" @connexion="callConnexion" />
      <div class="divLinkSub">
      <p class="linkSub" v-if="state == 'connect'" @click="state = 'noconnect'">
        S'inscrire
      </p>
      </div>
      <div class="divLinkConnect">
      <p class="linkConnect" v-if="state == 'noconnect'" @click="state = 'connect'">
        Se connecter
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import Connexion from "../components/Accueil/Connexion.vue";
import inscription from "../components/Accueil/inscription.vue";
export default {
  name: "Pageconnect",
  components: { inscription, Connexion },

  data: () => ({
    state: "connect",
    nom: "",
    prenom: "",
    mail: "",
    motdepasse: "",
    confmotdepasse: "",
  }),

  methods: {
    callAjouter: async function(payload) {
      const body = {
        firstname: payload.nom,
        lastname: payload.prenom,
        email: payload.mail,
        password: payload.motdepasse,
        occupation: payload.occupation,
      };

      /* Options de la requête */
      const options = {
        method: "POST", // Verbe
        headers: {
          "Content-Type": "application/json", // En-tête du type de données envoyé
        },
        body: JSON.stringify(body), // Transforme le body en JSON et défini le body de la requête
      };
      /* Tentative de requête */
      try {
        /* Envoi de la requête */
        const response = await fetch(
          "https://network-and-co-api.osc-fr1.scalingo.io/register",
          options
        );

        console.log(response); // Réponse

        const data = await response.json(); // Lire la réponse au format JSON
        this.state = "connect";

        console.log(data); // Body de la réponse
      } catch (error) {
        /* En cas d'erreur lors de l'exécutino de la requête */
        console.log(error);
      }
    },

    callConnexion: async function(payload) {
      const body = {
        email: payload.mailconnexion,
        password: payload.passconnexion,
      };
      console.log(body);

      /* Options de la requête */
      const options = {
        method: "POST", // Verbe
        headers: {
          "Content-Type": "application/json", // En-tête du type de données envoyé
        },
        body: JSON.stringify(body), // Transforme le body en JSON et défini le body de la requête
      };

      /* Tentative de requête */
      try {
        /* Envoi de la requête */
        const response = await fetch(
          "https://network-and-co-api.osc-fr1.scalingo.io/login",
          options
        );

        console.log(response); // Réponse

        const data = await response.json(); // Lire la réponse au format JSON

        const token = data.token;

        console.log(token);
        localStorage.setItem("token", token);
        if (token.value !== null) {
          this.login();
        }
        console.log(data); // Body de la réponse
      } catch (error) {
        /* En cas d'erreur lors de l'exécutino de la requête */
        console.log(error);
        this.logout();
      }
    },
  },
  inject: ["login", "logout"],
};
</script>

<style>

.linkConnect{
  cursor:pointer;
  text-align:center;
  padding:5px;  
}

.linkConnect:hover{
  background-color:#f5f5f5;
  border-radius:5px; 
  border-bottom:grey 1px solid;  
}

.divLinkConnect{
  width:100%;
  display:flex;
  justify-content:center;
}

.linkSub{
  cursor:pointer;
  text-align:center;
  padding:5px;  
}

.linkSub:hover{
  background-color:#f5f5f5;
  border-radius:5px; 
  border-bottom:grey 1px solid;  
}

.divLinkSub{
  width:100%;
  display:flex;
  justify-content:center;
}

</style>
