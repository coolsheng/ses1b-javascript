<template>
  <section class="container">
    <div>
      <app-logo/>
        <div v-show="register">
          <p>Enter your credentials below</p>
        <section class="textContainer" >
        <at-input v-model="registerUsername" placeholder="Username"></at-input> 
        </section>

        <section class="textContainer">
        <at-input v-model="registerPassword" type="password" placeholder="Password"></at-input>
        </section>
        </div>

        <div v-show="!register">
        <section class="textContainer" >
        <at-input v-model="username" placeholder="Username"></at-input> 
        </section>

        <section class="textContainer">
        <at-input v-model="password" type="password" placeholder="Password"></at-input>
        </section>
        </div>


        <section class="label">
        <at-button type="text" @click="register = true" v-show="!register">Register for an account</at-button>    
            </section>

        <div class="links">
         <!-- <nuxt-link to="/profile">  -->
          <at-button size="large" v-if="!register">
            <section class="lastResort" @click="checkLogin()">Login</section></at-button>
         <!-- </nuxt-link> -->
          <at-button size="large" v-if="register" @click="submitRegister()" > Register</at-button>

        </div>
        
        <section style="margin-top: 9px" class="textContainer">
        <p style="font-family:Quicksand">─────── or LOG IN WITH ───────</p>
        </section>

        <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

        <meta name="google-signin-client_id" content="79211080622-dvn6hr7esbil545oabc8fn01k5lmq4os.apps.googleusercontent.com">
        
        <div style="margin-top: 12px; display: inline-block;"  id="google-signin-btn">
        </div>

    </div>
  </section>   
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  layout: 'blank',
    components: {
    AppLogo
},
data(){
  return{
    password: "",
    username: "",
    registerUsername: "",
    registerPassword: "",
    register: false,
  }
},
    methods: {
    onSignIn (user) {
            const profile = user.getBasicProfile()
          this.$Message.success('Signed in successfully as ' + profile.getName())
      console.log('Name: ' + profile.getName());
      
    },
    submitRegister(){
      this.register = false; 
      this.$Message.success('Successfully registered')
      
      console.log(this.registerPassword, this.registerUsername)
    },
    checkLogin(){
      if(this.registerPassword == this.password && this.registerUsername == this.username && this.password != ""){
        window.location.href = "/profile";
      }
      else{
          this.$Message.error('Login failed: please check your username and password are correct')

      }
    }
},
  mounted() {
    gapi.signin2.render('google-signin-btn', { // this is the button "id"
      onsuccess: this.onSignIn // note, no "()" here
    })
  }
}
</script>

<style scoped>
.container {
  background:paleturquoise ;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.textContainer {
padding-top: 10px
}
.label{
  padding-top: 10px;
  float: left
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 53px;
    width: 250px;

}

 .lastResort {
  padding: 0px;
  width: 86px;
  height:20px;
}

</style>