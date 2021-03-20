<template>
  <div class="Agenda">
    <h2>Agenda</h2>
    <b-calendar
      @selected="selectDate"
      v-model="value"
      :min="min"
      :max="max"
      locale="en"
    ></b-calendar>

    <div class="evenement">
      <h4>Evénements</h4>
    </div>

    <div>
      <ul class="ul">
        <li v-for="(event, index) in dayevents" :key="index">
          {{ event.title }}
          {{ event.date }}
          <img class="img" :src="event.image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const events = [
  {
    date: "2021-03-23",
    title: "Salon professionnel à 09h00 le",
  },
  {
    date: "2021-03-23",
    title: "Plat du jour 'choucroute alsacienne' ",
    image:
      "https://www.alsace-terroir.com/medias/images/recettes/1-choucroute-a-l-alsacienne-1.jpg",
  },

  {
    date: "2021-03-24",
    title: "Pot de départ de Sophie à 15h00 le ",
  },
  {
    date: "2021-03-24",
    title: "Plat du jour 'Gambas grillées' ",
    image:
      "https://img.cuisineaz.com/610x610/2015-10-27/i82390-gambas-grillees-de-michele.jpg",
  },

  {
    date: "2021-03-24",
    title: "Team Building à 14h00",
  },
  {
    date: "2021-03-25",
    title: "Séminaire entreprise à 10h00 le ",
  },
  {
    date: "2021-03-25",
    title: "Plat du jour 'Salade niçoise' ",
    image:
      "https://cuisine.nessma.tv/uploads/6/2020-04/16b51243b507d8c8fe461aacdfd5eee3.jpg",
  },
  {
    date: "2021-03-22",
    title:
      "Présentation Network && Co (Alex, Houssem, Miguel, Léo) à 09h00 au Bocal Academy le ",
  },

  {
    date: "2021-03-22",
    title: "Plat du jour 'Couscous Royal'",
    image:
      "https://www.petitsplatsentreamis.com/wp-content/uploads/2019/11/Couscous-royal.jpg",
  },
  {
    date: "2021-03-22",
    title: "Soirée Network && Co à 20h00 le ",
  },

  {
    date: "2021-03-26",
    title: "Plat du jour 'Roti de boeuf' ",
    image: "https://cdn.lacuisinedannie.com/images/1052.jpg",
  },

  {
    date: "2021-03-27",
    title: "Evenement sportif Sophia Antipolis à 09h00 le ",
  },

  {
    date: "2021-03-27",
    title: "Evenement sportif Sophia Antipolis à 09h00 le ",
  },
];

export default {
  name: "agenda",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() - 2);
    minDate.setDate(15);
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);

    return {
      value: "",
      min: minDate,
      max: maxDate,
      dayevents: [],
    };
  },

  methods: {
    selectDate: function(ymd) {
      console.log(ymd);
      console.log(events);
      this.dayevents = events.filter((event) => event.date === ymd);
    },
  },
};
</script>

<style scoped>
h4 {
  padding-top: 30px;
  font-family: "Anton", sans-serif;
}

.Agenda {
  float: right;
  height: auto;
  max-width: 320px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px #7c8395;
  border-radius: 30px;
  font-size: 1rem;
  margin-top: 0px;
  padding-top: 30px;
  padding-bottom: 0px;
  padding-left: 25px;
  padding-right: 30px;
  font-family: "Anton", sans-serif;
}

.ul {
  padding-left: 10px;
}
.img {
  width: 250px;
}
</style>
