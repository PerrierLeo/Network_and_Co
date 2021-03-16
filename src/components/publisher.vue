<template>
    <div class="containerPublish">
        <div class="topPublish">
            <div class="userPublish">Utilisateur</div>
            <div class="toolsPublish">Outils</div>
        </div>
        <div class="publish">
            <textarea v-model="textPublish" id="areaPublish" name="areaPublish"
                        rows="7" cols="4"
                        autocomplete="off" placeholder="Comment vous sentez-vous aujourd'hui?"></textarea>
            <div><span class="btnPublish">Publier</span></div>
        </div>
      
      
    </div>
</template>

<script>
export default {
name: 'publisher',
textPublish:"",   
}
</script>

<style scoped>

.containerPublish{
    width:40vw;
    height:30vh;
    overflow:hidden;
    border:1px solid black;
    position:relative;  
}

.userPublish{
    background-color:crimson;
    padding:1vh 1vw;
    margin: 10px 0px 10px 0px;
}

.toolsPublish{
    background-color:blue;
    padding: 1vh 1vw;
    margin: 10px 0px 10px 0px;
}

.topPublish{
    display:flex;
    justify-content:space-between;
    margin-left:10px;
    margin-right:10px;
}

#areaPublish{
    resize:none;
    margin:10px 10px 10px 10px;
}

.publish{
    display:flex;
    flex-direction:column;
    height:40vh;
    
}

.btnPublish{
    background-color:burlywood;
    position:absolute;
    bottom:10px;
    right:10px;
    padding: 1vh 1vw;
    
}

</style>
