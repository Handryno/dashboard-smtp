<script>
import axios from 'axios'
const USER_API_URL = 'https://f1327e03-9bbd-4b28-9662-bf2dd71d157a.mock.pstmn.io'


export default {
    name: "user-delete",
    data() {
        return{
            username: '',
            description: '',
            password: '',
            host: '',
            port: '',
            status: '',
            type: '',
            usernameEmail: '',
            typeEmail: '',
        }
        
    },
    methods:{
        deleteUser(){
            const credentials = {
                username: this.username,
                description: this.description,
                password: this.password,
                host: this.host,
                port: this.port,
                status: this.status,
                type: this.type,
                emailProvider: this.emailProvider
            };
            axios
                .delete(`${USER_API_URL}/switching/notification/smtp/user/delete?id=middleware`,credentials)
                // .then((response) => console.log(this.$route.params.username))
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err.response))
        }
    },
    created(){
        axios
            .get(`${USER_API_URL}/switching/notification/smtp/user/get?username=` + this.$route.params.username)
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="d-grid gap-2 mt-4">
                <button class="btn btn-danger" type="button" @click="deleteUser()">Yes I want it deleted</button>
                <!-- <button @mouseover="btn = 'success'" @mouseleave="btn = 'danger'" :class='"btn btn-block btn-" + btn'
                    @click="deleteUser">
                    {{ btn == 'danger' ? 'Are you sure you want to delete this post?' : 'Yes. I want it deleted.' }}
                </button> -->  
            </div>
            <div class="d-grid gap-2 mt-4">
                <router-link to="/user-list" class="btn btn-warning">Cancel</router-link>
            </div>
        </div>
    </div>
</template>