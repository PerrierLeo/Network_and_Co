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

    <div>
      <h4>Evenements</h4>
    </div>

    <div>
      <ul>
        <li v-for="(event, index) in dayevents" :key="index">
          {{ event.title }}
          {{ event.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const events = [
  {
    date: "2021-03-16",
    title: "Salon professionnel",
  },
  {
    date: "2021-03-17",
    title: "Pot de départ de Sophie",
  },
  {
    date: "2021-03-24",
    title: "Anniversdaire de Léo ",
  },
  {
    date: "2021-03-25",
    title: "Anniversdaire de Miguel",
  },
  {
    date: "2021-03-22",
    title: "Présentation Network && Co",
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
.Agenda {
  float: right;
}

h4 {
  padding-top: 30px;
}
</style>
