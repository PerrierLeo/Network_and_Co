<template>
  <div class="inscription">
    <form>
      <input type="text" v-model="nom" placeholder="Nom" required />
      <input type="text" v-model="prenom" placeholder="Prénom" required />
      <input type="date" v-model="date" placeholder="  /  /  " required />
      <input type="email" v-model="mail" required placeholder="*****@***.**" />
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
      <button type="submit" @click="callAjouter">valider</button>
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
    date: "",
    mail: "",
    motdepasse: "",
    confmotdepasse: "",
  }),
  methods: {
    callAjouter(e) {
      this.$emit("ajouter", {
        nom: this.nom,
        prenom: this.prenom,
        date: this.date,
        mail: this.mail,
        motdepasse: this.motdepasse,
        confmotdepasse: this.confmotdepasse,
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

.inscription {
  display: flex;
  flex-direction: column;
}
</style>
