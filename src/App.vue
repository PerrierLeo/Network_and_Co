<template>
  <div id="app">
    <div v-if="loggedIn" id="nav">
      <h1 class="titleWebSite">NETWORK & CO</h1>
      <div>
        <router-link to="/"></router-link>
        <b-button-group>
          <b-button
            ><router-link to="/Accueil"
              ><b-avatar
                src="https://previews.123rf.com/images/pakkalin/pakkalin1503/pakkalin150300117/38526708-accueil-ic%C3%B4ne.jpg"
              ></b-avatar></router-link
          ></b-button>
          <b-button><router-link to="/Canteen">Cantine</router-link></b-button>
          <b-button><router-link to="/Ce">CE</router-link></b-button>
          <b-button v-b-modal.modal-1 @click="profil"
            ><b-avatar :src="profilePicture"></b-avatar
          ></b-button>
          <b-modal id="modal-1" title="Profil">
            <div>
              <div class="my-4">
                <p>Nom :</p>
                <p v-show="displayValue">{{ firstname }}</p>
                <input v-show="cachee" v-model="firstname" />
              </div>
            </div>
            <div class="my-4">
              Prénom :
              <p v-show="displayValue">{{ lastname }}</p>
              <input v-show="cachee" v-model="lastname" />
            </div>
            <div class="my-4">
              E-mail :
              <p v-show="displayValue">{{ email }}</p>
              <input v-show="cachee" v-model="email" />
            </div>
            <div class="my-4">
              Poste Occupé :
              <p v-show="displayValue">{{ occupation }}</p>
              <input v-show="cachee" v-model="occupation" />
            </div>
            <div>
              Photo de profil
              <input v-show="cachee" v-model="profilePicture" />
            </div>
            <b-avatar
              href="#bar"
              v-show="displayValue"
              @click="modifier"
              src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_960_720.png"
            ></b-avatar>

            <b-button
              @click="validModifier"
              v-show="cachee"
              variant="outline-primary"
              >Valider</b-button
            >
          </b-modal>
          <b-button @click="logout">Logout</b-button>
        </b-button-group>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => ({
    loggedIn: false,
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    profilePicture: "",
    cachee: false,
    displayValue: true,
  }),

  methods: {
    login: function() {
      this.loggedIn = true;
      this.$router.push("/Accueil");
    },

    logout: function() {
      this.loggedIn = false;
      localStorage.clear("token");
      this.$router.push("/Connexion");
    },

    modifier() {
      this.cachee = !this.cachee;
      this.displayValue = !this.displayValue;
    },
    validModifier: async function() {
      this.modifier();
      const body = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        age: "",
        profilePicture: this.profilePicture,
        occupation: this.occupation,
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "baerer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      };

      try {
        const response = await fetch(
          "https://network-and-co-api.osc-fr1.scalingo.io/user",
          options
        );

        console.log(response);

        const data = await response; // Lire la réponse au format JSON

        console.log(data); // Body de la réponse
      } catch (error) {
        console.log(error);
      }
    },

    profil: async function() {
      const options = {
        method: "GET", // Verbe
        headers: {
          "Content-Type": "application/json", // En-tête du type de données envoyé
          Authorization: "baerer " + localStorage.getItem("token"),
        },
      };

      /* Tentative de requête */
      try {
        /* Envoi de la requête */
        const response = await fetch(
          "https://network-and-co-api.osc-fr1.scalingo.io/user",
          options
        );

        console.log(response); // Réponse

        const data = await response.json(); // Lire la réponse au format JSON

        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.occupation = data.occupation;
        this.profilePicture = data.profilePicture;
        console.log(data);
        return this.firstname; // Body de la réponse
      } catch (error) {
        /* En cas d'erreur lors de l'exécutino de la requête */
        console.log(error);
      }
    },
  },
  mounted: async function() {
    this.profil();
    let token = localStorage.getItem("token");
    if (token !== null) {
      this.login();
    } else {
      this.logout();
    }
  },

  provide: function() {
    return {
      login: this.login,
      logout: this.logout,
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

button.btn.btn-secondary {
  background-color: #0275d8;
  border: none;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  background-color: #0275d8;
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
.displayFlex {
  display: flex;
}

.btn-group {
  justify-content: flex-end;
}

.titleWebSite {
  color: white;
  font-family: "Anton", sans-serif;
  justify-content: flex-start;
}
</style>
