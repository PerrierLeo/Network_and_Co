<template>
  <div id="main-container">
    <div class="ressource">
      <h2>Direction</h2>
    </div>
    <div id="direction">
      <p>{{ name }}</p>
      <p>{{ surname }}</p>
      <p>{{ post }}</p>
      <p>{{ mail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComposantDirection",
  props: ["name", "surname", "post", "mail"],
};
</script>

<style></style>
