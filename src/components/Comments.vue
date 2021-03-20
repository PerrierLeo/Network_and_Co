<template>
  <div class="areaComments">
    <div class="listComments">Espace où se trouvent tous les commentaires</div>
    <textarea
      cols="20"
      rows="1"
      v-model="comment"
      class="areaComments"
      placeholder="Commentez ce post"
    ></textarea>
    <div @click="pushComment(id)" class="btnPushComment">Envoyer</div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "comments",

  data: () => ({
    comment: "",
  }),
  methods: {
    pushComment: async function(id) {
      const body = {
        postId: id,
        content: this.comment,
      };
      console.log(body);

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
          "https://network-and-co-api.osc-fr1.scalingo.io/post/comment",
          options
        );

        console.log(response);
        console.log(id);

        const data = await response;
        location.reload();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.areaComments {
  resize: none;
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  border: 1px solid #d6d6d6;
  background-color: #f7f7f7;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
