<template>
    <div id='home'><h2>Home</h2>
    <p>Hello {{ $route.params.name }}</p>
        <button v-on:click="goAbout">Go to about</button>
    </div> 
</template>
<script>
    export default {
        // comment
        name: 'home',
        data() {
            return {
                name:""
            }
        },
        methods: {
            goAbout() {
                // Do something
                this.$router.push({
                    path: "about"            
                });
            }
        },
        created() {
            this.name = this.$route.params.name
            console.log(this.$route.name);
        }
    }
</script>
<style >
#home {
    background-color:darkorange;
}
</style>