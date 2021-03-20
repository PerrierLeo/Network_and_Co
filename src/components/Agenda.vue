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

          <h4>Cantine</h4>
          <img :src="event.image" />
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
    image:
      "https://www.vinci-autoroutes.com/sites/default/files/2019-09/festival-dromadaire-janvry.png",
  },
  {
    date: "2021-03-24",
    title: "Pot de départ de Sophie à 15h00 le ",
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
    date: "2021-03-22",
    title:
      "Présentation Network && Co (Alex, Houssem, Miguel, Léo) à 09h00 au Bocal Academy le ",
  },

  {
    date: "2021-03-22",
    title: "Soirée Network && Co à 20h00 le ",
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
</style>
