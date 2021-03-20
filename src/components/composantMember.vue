<template>
  <div>
    <div class="listMember">
      <div v-for="(elem, index) in user" :key="index">
        <div v-if="elem.occupation == service">
          <b-card no-body class="mb-1 ">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                class="colortest"
                block
                v-b-toggle="'accordion-' + index"
                variant="info"
                >{{ elem.firstname }}
                <span class="lastname">{{ elem.lastname }}</span></b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> 💼 {{ elem.occupation }}</b-card-text>
                <b-card-text> 📧 {{ elem.email }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardmember",
  props: ["service"],

  beforeMount: async function() {
    const option = {
      method: "GET", // Verbe
      headers: {
        "Content-Type": "application/json", // En-tête du type de données envoyé
        Authorization: "baerer " + localStorage.getItem("token"),
      },
    };

    try {
      const response = await fetch(
        "https://network-and-co-api.osc-fr1.scalingo.io/user/all",
        option
      );

      console.log(response); // Réponse

      const data = await response.json(); // Lire la réponse au format JSON

      this.user = data.users;
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  },

  data: () => ({
    user: [],
  }),
};
</script>

<style></style>
