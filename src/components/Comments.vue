<template>
    <div class="areaComments">
    <div class="listComments">Espace où se trouvent tous les commentaires</div>
    <textarea cols="20" rows="1" v-model="comment" class="areaComments" placeholder="Commentez ce post"></textarea>
    <div @click="pushComment" class="btnPushComment">Envoyer</div>
    </div>
</template>

<script>
export default {
 name:"comments",
 
 data:()=>({
     comment:"",
 })
}
</script>



<style scoped>
.areaComments{
    resize:none;
    margin:10px 10px 10px 10px;
    border-radius:15px;
    border:1px solid #D6D6D6;
    background-color:#f7f7f7;
    padding-left:10px;
    padding-top:10px;
}
</style>
