<template>
  <div class="desktop">
    <label>Email: {{mail}}</label><input type="text" v-model="mail" />
    <br />
    <br />
    <label>Password: </label><input type="password" v-model="password" />
    <br />
    <br />
    <button v-on:click="login(mail, password)">Log In</button>
    <br />
    <label class='error'>{{ authenticationError }}</label>
  </div>
</template>

<script>
 
    export default {
        name: 'Login',

        data: () => {
            return {
                mail: '',
                password: '',
                authenticationError: ''
            }
        },

        methods: {
            login: function(mail, password){
                this.$http.get('http://127.0.0.1:5000/user/get', {params: {mail: mail, password: password}}).then(function(request){
                    if(request.body.authenticationError){
                        this.$data.authenticationError = request.body.authenticationError;
                    }else{
                        this.$router.push('home')
                    }
                })
            } 
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .desktop{
        margin: 15px;
        width: 145px;
    }

    button{
        float: right;
    }

    .error{
        color: red;
        font-size: 15px;
    }
</style>
