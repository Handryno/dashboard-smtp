<script>
import axios from 'axios'

const USER_API_URL = 'https://f1327e03-9bbd-4b28-9662-bf2dd71d157a.mock.pstmn.io'
export default {
    name: "user-list",
    
    data() {
        return {
            items: [], 
        };
    },
    methods: {
        deleteUser(username){
            axios.get(`${USER_API_URL}/switching/notification/smtp/user/get?username=` + username)
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err.response))
        },
        updateUser(username){
            axios.get(`${USER_API_URL}/switching/notification/smtp/user/get?username=`+ username)
            .then((response) => console.log(response.data))
            // this.$router.push({username: username});
       },
        userList(){
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
                .get(`${USER_API_URL}/switching/notification/smtp/user/list`, credentials)
                // .then((response) => console.log(response.data.data))
                .then((response) => {
                    for(const i in response.data.data){
                        this.items.push(response.data.data[i])
                    }
                })
                .catch((err) => console.log(err.response))
        }
    },
    created(){
        this.userList();
    }
}
</script>

<template>
    <div class="list">

        <div class="container">
            <h1>All Users</h1>
            <div class="container">
                <table class="table" id="table" :items="items" :per-page="perPage" :current-page="currentPage" small
                    style="font-size:90%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Password</th>
                            <th>Host</th>
                            <th>Port</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>UsernameEmail</th>
                            <th>TypeEmail</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <template v-if="items.length > 0">
                        <tr v-for="(i, index) in items" :key="i.id">
                            <th scope="row text-start">{{ index + 1 }}</th>
                            <td>{{ i.username }}</td>
                            <td>{{ i.description }}</td>
                            <td>{{ i.password }}</td>
                            <td>{{ i.host }}</td>
                            <td>{{ i.port }}</td>
                            <td>{{ i.status }}</td>
                            <td>{{ i.type }}</td>
                            <td>{{ NULL }}</td>
                            <td>{{ NULL }}</td>
                            <td>
                                <router-link  :to="'/user-edit/' + i.username" class="btn btn-warning"
                                    style="margin:5px; font-size: small;" v-on:click="updateUser(i.username)">
                                    Update
                                </router-link>
                                <router-link :to="'/user-delete/' + i.username" class="btn btn-danger"
                                    style="font-size:small;color: black; margin-bottom: 5px;" v-on:click="deleteUser(i.username)">
                                    Delete
                                </router-link>
                            </td>
                        </tr>
                    </template>
                    <tr v-else>
                        <td colspan="15">No posts</td>
                    </tr>
                </table>
                <div class="row">
                    <div class="d-grid gap-2 mt-4">
                        <router-link to="/user-create" class="btn btn-primary">New User Add</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>