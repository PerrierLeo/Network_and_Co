<template>
    <div>
        <div @click="increaseLike" class="like">
        <span>{{countLike}} Likes</span>
        </div>
    </div>  
</template>

<script>
export default {
    name:"like",

    data: function(){
    },

    methods:{
        
    }
}
</script>

<style scoped>
    .like{
        padding:5px;
        background:linear-gradient(90deg, rgba(69,163,231,1) 0%, rgba(29,150,253,1) 100%);
        width:5vw;
        border-radius:5px;
        color:white;
        cursor:pointer;
        

    }
</style>