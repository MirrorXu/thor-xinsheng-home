<template>
    <div id="app">

        <nav></nav>
        {{msg}}
    </div>
</template>

<script>
//    import Header from "../../components/header/header.vue"
    export default {
        name: 'app',
        data:function () {
            return{
            	h1:"hello ,  this is contact.html"
            }
        },
        components:{Header}
    }
</script>

<style lang="less">
    /*@import "../../assets/reset";*/
    #app {

    }
</style>
