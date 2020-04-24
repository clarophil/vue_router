<template>
    <div id='userprofile'><h3>User profile</h3>
    <p>ID: {{userid}}</p>
    </div> 
</template>
<script>
    export default {
        name: 'userprofile',
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
#userprofile {
    background-color: honeydew;
}
</style>