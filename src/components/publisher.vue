<template>
  <div class="containerPublish">
    <div class="topPublish">
      <div class="userPublish"></div>
      <div class="toolsPublish">Outils</div>
    </div>
    <div class="publish">
      <input
        class="titlePost"
        v-model="title"
        placeholder="Donnez un nom à votre publication..."
      />
      <textarea
        v-model="content"
        id="areaPublish"
        name="areaPublish"
        rows="7"
        cols="10"
        autocomplete="off"
        placeholder="Comment vous sentez-vous aujourd'hui?"
      ></textarea>
      <input
        class="picPost"
        type="url"
        v-model="image"
        placeholder="Insérez ici un lien d'image"
      />
      <div>
        <span @click="pushPubli" class="btnPublish">Publier</span>
      </div>
    </div>

    <div class="posts"></div>
  </div>
</template>

<script>
export default {
  name: "publisher",

  data: () => ({
    title: "",
    content: "",
    image: "",
    date: new Date().toLocaleString(),
  }),

  methods: {
    pushPubli: async function() {
      const body = {
        title: this.title,
        content: this.content,
        date: this.date,
        image: this.image,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      };

      try {
        const response = await fetch(
          "https://network-and-co-api.osc-fr1.scalingo.io/post",
          options
        );
        console.log(response);

        const data = await response.json();
        console.log(data);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.containerPublish {
  width: 40vw;
  height: 55vh;
  overflow: hidden;
  border: 1px solid black;
  position: relative;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  background-color: white;
}

.userPublish {
  padding: 1vh 1vw;
  margin: 10px 0px 10px 0px;
}

.toolsPublish {
  padding: 1vh 1vw;
  margin: 10px 0px 10px 0px;
}

.topPublish {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}

.picPost {
  border: none;
  border-bottom: 1px solid grey;
  margin-left: 1vw;
  margin-right: 1vw;
}

.picPost::placeholder {
  color: lightgrey;
  font-style: italic;
}

#areaPublish {
  resize: none;
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  border: 1px solid #d6d6d6;
  background-color: #f7f7f7;
  padding-left: 10px;
  padding-top: 10px;
}

#areaPublish:focus,
.picPost,
.titlePost {
  outline: none;
}

#areaPublish::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-top: 5px;
  padding-left: 5px;
}

.titlePost {
  border: none;
  border-bottom: 1px solid grey;
  margin-left: 1vw;
  margin-right: 1vw;
}

.titlePost::placeholder {
  color: lightgrey;
  font-style: italic;
}

.publish {
  display: flex;
  flex-direction: column;
  height: 40vh;
}

.btnPublish {
  background: linear-gradient(
    90deg,
    rgba(69, 163, 231, 1) 0%,
    rgba(29, 150, 253, 1) 100%
  );
  color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 1vh 1vw;
  cursor: pointer;
  margin-top: 5vh;
}
.btnPublish:hover {
  background: linear-gradient(
    90deg,
    rgba(71, 176, 251, 1) 0%,
    rgba(65, 155, 232, 1) 100%
  );
}
</style>
