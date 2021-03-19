<template>
  <div class="accueil">
    <publisher @publi="pushPubli" />
    <div class="publication" v-for="(elem, index) in posts" :key="index">
      <div class="topPost">
        <div class="user"><span>Alexandre TORTIELLO</span></div>
        <div class="postDate">{{elem.date}}</div>
      </div>
      <div class="middlePost">
      <div class="postText">{{elem.text}}</div> 
      </div>
      <div class="bottomPost">
      <like />
      </div>
      <comments />
    </div>
  </div>
</template>

<script>

import comments from '../components/Comments.vue'
import publisher from '../components/publisher.vue'
import like from '../components/Like.vue'

export default {
  name: "Accueil",
  components: { publisher, like, comments }, 

  data:()=>({
    posts:[],    
  }),

  methods:{

    /*Fonction Publier */
    pushPubli(payload){
      let newPubli ={
        text:payload.textPublish, 
      }
      this.posts.push(newPubli)
    },
  }

};
</script>

<style scoped>



.accueil{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.publication{
  width:40vw;
  margin-top:20px;
  padding:10px 0px 10px 0px;
    height:auto;
    overflow:hidden;
    border:1px solid #D6D6D6;
    position:relative;  
    border-radius:6px;
    background-color:white;
}

.topPost{
  display:flex;
  margin-left:1.5vh;
  justify-content:flex-start;
  width:12vw;
  padding-top:1px;

}

.middlePost{
  margin-top:10px;
}

.bottomPost{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-right:1.5vh;
}

.user{
  font-weight:bold;
}


</style>
