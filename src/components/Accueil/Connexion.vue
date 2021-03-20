<template>
  <div class="Ce">
    <form>
      <input
        type="email"
        v-model="mailconnexion"
        required
        placeholder="e-mail"
      />
      <input
        type="password"
        v-model="passconnexion"
        required
        placeholder="mot de passe"
      />
      <button type="submit" @click="callConnexion">connexion</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Connexion",
  props: ["firstname", "lastname"],
  components: {},

  data: () => ({
    mailconnexion: "",
    passconnexion: "",
  }),
  methods: {
    callConnexion(e) {
      this.$emit("connexion", {
        mailconnexion: this.mailconnexion,
        passconnexion: this.passconnexion,
      });
      e.preventDefault();
    },
  },
};
</script>
<style></style>
