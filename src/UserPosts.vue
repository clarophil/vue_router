<template>
    <div id='userposts'><h3>User posts</h3>
        <p>ID: {{userid}}</p>
    </div> 
</template>
<script>
    export default {
        name: 'userpost',
        data() {
            return {
                userid:0
            }
        },
        methods: {},
        created() {
            this.userid = this.$route.params.userid
        }
    }
</script>
<style >
#userposts {
    background-color: hotpink;
}
</style>
