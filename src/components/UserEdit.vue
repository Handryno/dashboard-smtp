<script>
import { assertDeclareTypeAlias } from '@babel/types';
import axios from 'axios'
// import { useRoute } from 'vue-router'

const USER_API_URL = 'https://f1327e03-9bbd-4b28-9662-bf2dd71d157a.mock.pstmn.io'
// const route = useRoute()

export default{
    name: "user-edit",
    data(){
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
            
        };
    },
    methods: {
        editSave(){
            // alert(this.username);
            // alert(this.description);
            // alert(this.password);
            // alert(this.host);
            // alert(this.port);
            // alert(this.status);
            // alert(this.type);
            // alert(this.emailProvider.usernameEmail);
            // alert(this.emailProvider.typeEmail);
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
                .post(`${USER_API_URL}/switching/notification/smtp/user/update`, credentials)
                .then((response) => console.log(response.data))
                // .then((response) => this.response = response.data)
                .catch((err) => console.log(err.response))
        }
    },
    created(){
        axios
        .get(`${USER_API_URL}/switching/notification/smtp/user/get?username=` + this.$route.params.username)
        .then((response) => {
            this.username = response.data.data.username;
            this.description = response.data.data.description;
            this.password = response.data.data.password;
            this.host = response.data.data.host;
            this.port = response.data.data.port;
            this.status = response.data.data.status;
            this.type = response.data.data.type;
            this.usernameEmail = response.data.data.emailProvider.username;
            this.typeEmail = response.data.data.emailProvider.type;
            // console.log(this.$route.params.username)
        })
        .catch((err) => console.log(err.response))
        // console.log(this.$route.params.username);
        // console.log(result.data)
    }
}
</script>
<template>
    <div>
        <UserTitle :title="title" />
        <!-- <form @submit.prevent="editSave(post._id, event)"> DATA CHECK CONTROL AFTER -->
        <div class="row">
            <div class="col">
                <div class="mb-3 row" style="text-align:left">
                    <label for="username" class="col-sm-5 col-form-label">Username</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="username" placeholder="Username"
                            v-model="username">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="host" class="col-sm-5 col-form-label">Host</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="host" placeholder="Host" v-model="host">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="status" class="col-sm-5 col-form-label">Status</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="status" placeholder="Status" v-model="status">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="description" class="col-sm col-form-label">Description</label>
                    <div class="col-sm-7">
                        <textarea class="form-control" placeholder="User Description" id="description"
                            style="height: 100px" v-model="description"></textarea>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-3 row" style="text-align:left">
                    <label for="inputPassword" class="col-sm col-form-label">Password</label>
                    <div class="col-sm-7">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                            v-model="password">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="port" class="col-sm col-form-label">Port</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="port" placeholder="Port" v-model="port">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="type" class="col-sm col-form-label">Type</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="type" placeholder="Type" v-model="type">
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <h5>Email Provider</h5>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="usernameEmailProvider" class="col-sm col-form-label">Username</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="usernameEmailProvider" placeholder="Username"
                            v-model="usernameEmail">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="typeEmailProvider" class="col-sm col-form-label">Type</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="typeEmailProvidere" placeholder="Type"
                            v-model="typeEmail">
                    </div>
                </div>
            </div>
        </div>
        <!-- </form> -->
        <div class="container">
            <div class="row">
                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-success" type="button" @click="editSave()">Save the
                        edit</button>
                </div>
                <div class="d-grid gap-2 mt-4">
                    <router-link to="/" class="btn btn-warning">Cancel</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
