<template>
    <div id='user'><h2>User</h2>
    <router-link :to="{ name: 'profile', params: { userid } }">Profile</router-link>
    <router-link :to="{ name: 'posts', params: { userid } }">Posts</router-link>
    <router-view></router-view>
    </div> 
</template>
<script>
    export default {
        name: 'User',
        data() {
            return {
                userid:1
            }
        },
        methods: {}
    }
</script>
<style >
#user {
    background-color: gainsboro;
}
</style>