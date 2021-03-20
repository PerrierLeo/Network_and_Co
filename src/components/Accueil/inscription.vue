<template>
  <div class="inscription">
    <form>
      <input type="text" v-model="nom" placeholder="Nom" required />
      <input type="text" v-model="prenom" placeholder="Prénom" required />
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
      <select type="text" v-model="occupation" required>
        <option disabled>Service occupé</option>
        <option value="RH">RH</option>
        <option value="Communication">Communication</option>
        <option value="Commercial">Commercial</option>
        <option value="Compta">Compta</option>
      </select>
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

.inscription {
  display: flex;
  flex-direction: column;
}
</style>
