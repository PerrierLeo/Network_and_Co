<template>
  <div id="main-container">
    <div class="ressource">
      <h2>Service Commercial</h2>
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
  name: "composantCommercial",
  props: ["name", "surname", "post", "mail"],
};
</script>

<style></style>
