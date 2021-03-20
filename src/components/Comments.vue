<template>
  <div class="areaComments">
    <input
      class="commentInput"
      v-model="comment"
      type="text"
      placeholder="Commentez cette publication"
    />

    <div @click="pushComment(id)" class="btnPushComment">
      <img
        class="picSendComment"
        width="30px"
        height="30px"
        src="@/assets/icons8-envoyer-message-48.png"
      />
    </div>
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.picSendComment {
  margin-right: 10px;
  margin-bottom: 6px;
}
.commentInput {
  margin-bottom: 8px;
  border: none;
  width: 80%;
  color: #f7f7f7;
}
.areaComments {
  display: flex;
  justify-content: space-between;
  resize: none;
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  border: 1px solid #d6d6d6;
  background-color: #f7f7f7;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
