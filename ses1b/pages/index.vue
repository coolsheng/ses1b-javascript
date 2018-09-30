<template>
  <section class="container">
    <div>
      <app-logo/>
        <section class="textContainer">
        <at-input v-model="inputValue" placeholder="Username"></at-input> 
        </section>
        <section class="textContainer">
        <at-input v-model="password" type="password" placeholder="Password"></at-input>
        </section>
         <!-- //a.v-1 -->
         <section class="box"> <input type="checkbox" id="checkbox" v-model="checked">
         <label for="checkbox"> Remember me</label>
         </section>  
         <!-- //end -->
         <section class="container2" >
           <div class="links">
           <nuxt-link to="/profile"> 
           <at-button size="large">Login</at-button>
           </nuxt-link>
           </div> 
        </section>

  <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
  
   <!-- //a.v-1 -->
   <section class="container3"> <p class="demo-desc"> ─────── or LOG IN WITH ────── </p>
   </section>
   <!-- //end -->
   <section class= "circle" >
    <meta name="google-signin-client_id" content="79211080622-dvn6hr7esbil545oabc8fn01k5lmq4os.apps.googleusercontent.com">
    <div style="margin-top: 12px" id="google-signin-btn"></div>
    </section>
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
    methods: {
    onSignIn (user) {
            const profile = user.getBasicProfile()
          this.$Message.success('Signed in successfully as ' + profile.getName())
      console.log('Name: ' + profile.getName());
      
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
  background-color:lightblue ;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container2 {
  padding-top: 25px;
  float: left;
}
.container3 {
  padding-top: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.cirlce{
   margin: auto;
    width: 50%;
    padding: 10px;
}
.textContainer {
padding-top: 10px
}


.box {
  padding-top: 10px;
  float: left;
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
  
  padding-top: 10px;
}
</style>
