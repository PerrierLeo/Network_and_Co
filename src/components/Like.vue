<template>
  <div>
    <button @click="liker(id)" class="like">Like</button>
  </div>
</template>

<script>
export default {
  name: "like",
  props: ["id"],

  methods: {
    liker: async function(id) {
      const body = {
        postId: id,
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
          "https://network-and-co-api.osc-fr1.scalingo.io/post/like",
          options
        );

        console.log(response);
        console.log(id);

        const data = await response;
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
.like {
  padding: 5px;
  background: linear-gradient(
    90deg,
    rgba(69, 163, 231, 1) 0%,
    rgba(29, 150, 253, 1) 100%
  );
  width: 5vw;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
</style>
