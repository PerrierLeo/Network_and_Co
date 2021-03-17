<template>
  <div class="accueil">
    <publisher @publi="pushPubli" />
    <div class="publication" v-for="(elem, index) in posts" :key="index">
      {{elem.text}} {{elem.date}}
    </div>
  </div>
</template>

<script>

import publisher from '../components/publisher.vue'

export default {
  name: "Accueil",
  components: { publisher }, 

  data:()=>({
    
    posts:[],
    
  }),

  methods:{
    pushPubli(payload){
      let newPubli ={
        text:payload.textPublish, 
        date:new Date(),
      }
      this.posts.push(newPubli)
    },
   
  }

};
</script>

<style scoped>

.accueil{
  display:flex;
  justify-content:center;
}

</style>
