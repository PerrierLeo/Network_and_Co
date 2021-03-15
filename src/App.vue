<template>
  <div id="app">
    <div id="nav">
      <div class="accueil"><router-link to="/">Accueil</router-link></div>
      <div class="staff"><router-link to="/Staffs">Membres</router-link></div>
      <div class="canteen">
        <router-link to="/Canteen">Cantine</router-link>
      </div>
      <div class="ce"><router-link to="/Ce">CE</router-link></div>
      <div class="messagerie">
        <router-link to="/Messagerie">Messagerie</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
