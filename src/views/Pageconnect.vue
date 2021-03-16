<template>
  <div class="Accueil">
    <div>
      <inscription
        v-if="state == 'noUser'"
        :class="{ active: isActive }"
        @ajouter="callAjouter"
      ></inscription>
      <connexion v-if="state == 'noconnect'" @connexion="callConnexion" />
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
    isActive: false,
    nom: "",
    prenom: "",
    date: "",
    mail: "",
    motdepasse: "",
    confmotdepasse: "",
    state: "noUser",

    tabusers: [],
  }),
  methods: {
    callAjouter(payload) {
      let isExist = false;
      for (const elem of this.tabusers) {
        if (elem.nom != payload.nom) {
          isExist = false;
        } else {
          isExist = true;
          alert("utilisateur déja pris");
          break;
        }
      }
      if (payload.nom == "") {
        alert("remplir le champs nom");
      } else if (payload.prenom == "") {
        alert("remplir le champs prenom");
      } else if (payload.date == "") {
        alert("remplir le champs date");
      } else if (payload.mail == "") {
        alert("remplir le champs mail");
      } else if (payload.motdepasse == "") {
        alert("remplir le champs mot de passe");
      } else if (payload.motdepasse != payload.confmotdepasse) {
        alert("les mots de passe ne correspondent pas");
      }
      if (
        isExist == false &&
        payload.nom != "" &&
        payload.prenom != "" &&
        payload.date != "" &&
        payload.mail != "" &&
        payload.motdepasse != "" &&
        payload.motdepasse == payload.confmotdepasse
      ) {
        let newUser = {
          nom: payload.nom,
          prenom: payload.prenom,
          date: payload.date,
          mail: payload.mail,
          motdepasse: payload.motdepasse,
          confmotdepasse: payload.confmotdepasse,
        };
        (this.state = "noconnect"), (isExist = true);
        this.tabusers.push(newUser);
      }
    },
    callConnexion(payload) {
      for (const elem of this.tabusers) {
        if (
          elem.mail == payload.mailconnexion &&
          elem.motdepasse == payload.passconnexion
        ) {
          this.state = "connect";
        } else {
          alert("erreur dans identifiants ou mot de passe");
          break;
        }
      }
      if (this.state == "connect") {
        this.login();
        this.$router.push("Accueil");
      }
    },
  },
  inject: ["login"],
};
</script>
<style></style>
