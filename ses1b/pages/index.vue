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
        <at-input v-model="username" placeholder="Username"></at-input>         </section>

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
},

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