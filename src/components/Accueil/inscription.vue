<template>
  <div class="inscription">
    <h1 class="titleWebsite">Network & Co</h1>
    <form class="formulaire">
      <h2 class="titleForm">inscription</h2>
      <input type="text" v-model="nom" placeholder="Nom" required />
      <input type="text" v-model="prenom" placeholder="Prénom" required />
      <input type="email" v-model="mail" required placeholder="Adresse Mail" />
      <input
        type="password"
        v-model="motdepasse"
        placeholder="mot de passe"
        required
      />
      <input
        type="password"
        v-model="confmotdepasse"
        placeholder="confirmation mot de passe"
        required
      />
      <select type="text" v-model="occupation" required>
        <option disabled>Service occupé</option>
        <option value="RH">RH</option>
        <option value="Communication">Communication</option>
        <option value="Commercial">Commercial</option>
        <option value="Compta">Compta</option>
      </select>
      <button class="btnSubmit" type="submit" @click="callAjouter">valider</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "inscription",
  components: {},

  data: () => ({
    nom: "",
    prenom: "",
    mail: "",
    motdepasse: "",
    confmotdepasse: "",
    occupation: "",
  }),
  methods: {
    callAjouter(e) {
      this.$emit("ajouter", {
        nom: this.nom,
        prenom: this.prenom,
        mail: this.mail,
        motdepasse: this.motdepasse,
        confmotdepasse: this.confmotdepasse,
        occupation: this.occupation,
      });
      e.preventDefault();
    },
  },
};
</script>
<style scoped>

.active {
  background-color: red;
}

.inscription{
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;

}
.formulaire {
  border-radius:15px;
  background-color:#0275D8;
  padding:30px;
  margin-left:10vw;
  width:20vw;
  display: flex;
  flex-direction: column;
}

.titleForm{
  color:white;
  font-family:'Anton', sans-serif;
  text-transform:uppercase;
  margin-bottom:2vh;
}

input{
  margin-bottom:20px;
  border-radius:8px;
  border:none;
}

.titleWebsite{
  text-transform:uppercase;
  font-family:'Anton', sans-serif;
  color:#F0AD4E;
  font-size:5rem;
  text-shadow:1px 1px white, -1px -1px #444;
}

.btnSubmit{
  font-family:'Anton', sans-serif;
  text-transform:uppercase;
  border-radius:8px;
  margin-top:20px;
  background-color:#F0AD4E;
  color:white;
}
</style>
