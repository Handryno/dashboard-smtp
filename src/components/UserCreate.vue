<script>
import axios from 'axios'
const USER_API_URL = 'https://f1327e03-9bbd-4b28-9662-bf2dd71d157a.mock.pstmn.io'
export default {
    name: "user-create",
    data(){
        return{
            username: "",
            description: "",
            password: "",
            host: "",
            port: "",
            status: "",
            type: "",
            emailProvider: {usernameEmail: "", typeEmail: ""}
        };
    },
    methods: {
        userSave(){
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
                .put(`${USER_API_URL}/switching/notification/smtp/user/add`, credentials)
                .then((response) => console.log(response.data))
                // .then((response) => this.response = response.data)
                .catch((err) => console.log(err.response))
        }
    },
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
                            v-model="emailProvider.usernameEmail">
                    </div>
                </div>
                <div class="mb-3 row" style="text-align:left">
                    <label for="typeEmailProvider" class="col-sm col-form-label">Type</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="typeEmailProvider" placeholder="Type"
                            v-model="emailProvider.typeEmail">
                    </div>
                </div>
            </div>
        </div>
        <div class="form-floating">
            <div class="container">
                <div class="row">
                    <div class="d-grid gap-2 mt-4">
                        <button class="btn btn-success" type="button" @click="userSave()">New Create User</button>
                    </div>
                    <div class="d-grid gap-2 mt-4">
                        <router-link to="/" class="btn btn-warning">Cancel</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- </form> -->
    </div>
</template>