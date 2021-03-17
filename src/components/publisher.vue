<template>
    <div class="containerPublish">
        <div class="topPublish">
            <div class="userPublish">Utilisateur</div>
            <div class="toolsPublish">Outils</div>
        </div>
        <div class="publish">
            <textarea v-model="textPublish" id="areaPublish" name="areaPublish"
                        rows="7" cols="10"
                        autocomplete="off" placeholder="Comment vous sentez-vous aujourd'hui?"></textarea>
            <div><span @click="pushPubli" class="btnPublish">Publier</span></div>
        </div>

        <div class="posts">
        </div>

    </div>
</template>

<script>

export default {
name: 'publisher',

data:()=>({
    textPublish:"",
}),

methods:{
    pushPubli(){
        this.$emit('publi', {textPublish:this.textPublish})
    }
}




}

</script>

<style scoped>

.containerPublish{
    width:40vw;
    height:36vh;
    overflow:hidden;
    border:1px solid black;
    position:relative;  
    border: 1px solid #D6D6D6;
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
    border-radius:15px;
    border:1px solid #D6D6D6;
    background-color:#f7f7f7;
    padding-left:10px;
    padding-top:10px;
    
}

#areaPublish:focus{
outline:none;
}

#areaPublish::placeholder{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top:5px;
    padding-left:5px;
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
