<script>
import axios from 'axios'
const USER_API_URL = 'https://f1327e03-9bbd-4b28-9662-bf2dd71d157a.mock.pstmn.io'

export default {
    name: "GetToken",
    data() {
      return{
        usernameToken: "",
        passwordToken: "",
        grantTypeToken: "",
        response: ""
      };  
    },
    methods: {
        getToken(){
            const credentials = {
                usernameToken: this.usernameToken,
                passwordToken: this.passwordToken,
                grandTypeToken: this.grantTypeToken
            };
            // const headers = {
            //     "Authorization": "Basic ZWE1M2UxZmQ6NjM0NTc0OTkyZjhmZmFlYzhjM2JkMTM0MDU1NzRhOTc=",
            //     "Content-Type": "application/json",
            //     "Access-Control-Allow-Origin": "true",
            //     "Access-Control-Allow-Header": "X-Requested-With",
            //     "Accept": "application/json", 
            // };
            axios
                .post(`${USER_API_URL}/auth/realms/3scale-external- dev/protocol/openid-connect/token`, credentials)
                .then((response) => this.response = response.data.access_token)
                .catch((err) => console.log(err.response));
        }
    }
}
</script>
<template>
    <div class="mb-3 row">
        <label for="username" class="col-sm-5 col-form-label">Username</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" id="username" placeholder="Username" v-model="usernameToken">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="password" class="col-sm-5 col-form-label">Password</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" id="password" placeholder="Password" v-model="passwordToken">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="grantType" class="col-sm-5 col-form-label">Grant_type</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" id="status" placeholder="GrantType" v-model="grantTypeToken">
        </div>
    </div>
    <div class="row">
        <div class="d-grid gap-2 mt-4">
            <button class="btn btn-success" type="button" @click="getToken()">Get Token</button>
        </div>
    </div>
    <div>
        <h1></h1>
        <h1>Access Token</h1>
        <p>
            {{ response }}
        </p>
    </div>

</template>