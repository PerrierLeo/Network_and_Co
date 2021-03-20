<template>
  <div class="connexion">
    <h1 class="titleWebsite">Network & Co</h1>
    <form class="formConnect">
       <h2 class="titleForm">connexion</h2>
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
      <button class="btnConnect" type="submit" @click="callConnexion">connexion</button>
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

<style scoped>

.connexion{
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;
}

.formConnect{
 
  border-radius:15px;
  background-color:#0275D8;
  padding:30px;
  margin-left:10vw;
  width:20vw;
  display: flex;
  flex-direction: column;
}

input{
  margin-bottom:20px;
  border-radius:8px;
  border:none;
}

.titleForm{
  color:white;
  font-family:'Anton', sans-serif;
  text-transform:uppercase;
  margin-bottom:2vh;
}

.btnConnect{
  font-family:'Anton', sans-serif;
  text-transform:uppercase;
  border-radius:8px;
  margin-top:20px;
  background-color:#F0AD4E;
  color:white;
}

.titleWebsite{
  text-transform:uppercase;
  font-family:'Anton', sans-serif;
  color:#F0AD4E;
  font-size:5rem;
  text-shadow:1px 1px white, -1px -1px #444;
}

</style>

