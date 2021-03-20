<template> </template>

<script>
export default {
  name: "ComposantRessource",
  props: ["name", "surname", "post", "mail", "tel"],
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
