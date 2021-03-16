<template>
  <div class="Ce">
    
    <button>
  </div>
</template>

<script>
export default {
  name: "Connexion",
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