<template>
  <div id="app">
    <div v-if="loggedIn" id="nav">
      <div class="accueil"><router-link to="/">Inscription</router-link></div>

      <div class="accueil">
        <router-link to="/Accueil">Accueil</router-link>
      </div>
      <div class="staff"><router-link to="/Staff">Membres</router-link></div>
      <div class="canteen">
        <router-link to="/Canteen">Cantine</router-link>
      </div>
      <div class="ce"><router-link to="/Ce">CE</router-link></div>
      <div class="messagerie">
        <router-link to="/Messagerie">Messagerie</router-link>
        <button @click="logout">deconnexion</button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => ({
    loggedIn: false,
    ouiInscrit: true,
    nonInscrit: true,
  }),

  methods: {
    login: function() {
      this.loggedIn = true;
    },
    logout: function() {
      this.loggedIn = false;
      this.$router.push("/connexion");
    },
  },

  provide: function() {
    return {
      login: this.login,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 5vh;
  background-color: #02aa93;
  width: auto;
}

body {
  margin: 0px;
}
.accueil,
.staff,
.canteen,
.ce,
.messagerie {
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
