<template>
  <div class="Cantine">
    <b-card
      title="Cantine"
      img-src="https://www.leparisplage.net/img/platdujour/01.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Votre cantine sur-mesure pour nourrir vos employés au quotidien. Des
        plats variés et accessibles 24/24 pour vos collaborateurs. Services:
        Service de restauration, Livraisons repas.
      </b-card-text>

      <b-button
        href="https://www.classcroute.com/page/a-propos"
        target="_blank"
        variant="primary"
        >Menu du jour</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "cantine",
};
</script>

<style scoped>
.Cantine {
  width: 320px;
}

.mb-2 {
  box-shadow: 0px 5px 10px #7c8395;
  border-radius: 30px;
}
</style>
