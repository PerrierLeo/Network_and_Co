<template>
  <div id="main-container">
    <div class="ressource">
      <h2>Service Communication</h2>
    </div>
    <div id="ressource">
      <p>{{ name }}</p>
      <p>{{ surname }}</p>
      <p>{{ post }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "composantCom",
  props: ["name", "surname", "post"],
};
</script>

<style></style>
