<template>
  <div id="main-container">
    <div class="ressource">
      <h2>Ressource humaine</h2>
    </div>
    <div id="ressource">
      <p>{{ name }}</p>
      <p>{{ surname }}</p>
      <p>{{ post }}</p>
      <p>{{ mail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComposantRessource",
  props: ["name", "surname", "post", "mail"],
};
</script>

<style scoped>
#main-container {
  width: 20vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

#ressource {
  text-align: center;
}
</style>
