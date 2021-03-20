<template>
  <div>
    <div
      class="publication"
      v-for="(elem, index) in this.body"
      :key="index + '2'"
    >
      <div class="topPost">
        <div class="user">
          <span class="infoUserPost"
            ><b-avatar :src="profilePicture"></b-avatar
            ><span class="elemName"
              >{{ elem.firstname }} {{ elem.lastname }}</span
            >
          </span>
        </div>
        <div class="postTitle">{{ elem.title }}</div>
      </div>
      <div class="middlePost">
        <div class="postText">{{ elem.content }}</div>
      </div>
      <div class="bottomPost"></div>
      <like :id="elem._id" />
      <div v-for="(elem, index) in elem.likes" :key="index + '1'">
        {{ elem.firstname }} {{ elem.lastname }}
        <img class="iLike" src="../assets/jaime.png" />
      </div>
      <!-- commentaire -->
      <comments :id="elem._id" />
      <div
        class="comments"
        v-for="(elem, index) in elem.comments"
        :key="'3' + index"
      >
        {{ elem.firstname }} {{ elem.lastname }} : {{ elem.content }}
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments.vue";
import like from "./Like.vue";
export default {
  components: { like, Comments },
  props: ["profilePicture"],
  name: "publication",

  data: () => ({
    body: [],
  }),
  methods: {},
  mounted: async function() {
    const options = {
      method: "GET", // Verbe
      headers: {
        "Content-Type": "application/json", // En-tête du type de données envoyé
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };

    /* Tentative de requête */
    try {
      /* Envoi de la requête */
      const response = await fetch(
        "https://network-and-co-api.osc-fr1.scalingo.io/posts",
        options
      );

      console.log(response); // Réponse

      const data = await response.json(); // Lire la réponse au format JSON
      this.body = data.posts;
      console.log(this.body);
    } catch (error) {
      /* En cas d'erreur lors de l'exécutino de la requête */
      console.log(error);
    }
  },
};
</script>

<style scoped>
.postText {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}
.elemName {
  margin-left: 10px;
  margin-top: 6px;
}

.postTitle {
  margin-right: 20px;
  background-color: #f0ad4e;
  padding: 5px;
  color: white;
  border-radius: 8px;
}

.publication {
  width: 40vw;
  margin-top: 20px;
  padding: 10px 0px 10px 0px;
  height: auto;
  overflow: hidden;
  border: 1px solid #d6d6d6;
  position: relative;
  border-radius: 6px;
  background-color: white;
}

.topPost {
  display: flex;
  justify-content: space-between;
  margin-left: 1.5vh;
  width: 100%;
}

.middlePost {
  margin-top: 10px;
}

.bottomPost {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 1.5vh;
}

.user {
  font-weight: bold;
}

.comments {
  width: 40vw;
  margin-top: 20px;
  padding: 10px 0px 10px 0px;
  height: auto;
  overflow: hidden;
  border: 1px solid #d6d6d6;
  position: relative;
  border-radius: 6px;
  background-color: white;
}
.iLike {
  width: 1vw;
  height: 2vh;
}
</style>
