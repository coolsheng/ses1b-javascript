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

        <section class="label">
        <label for="remember"> <input id="remember" type="checkbox"> Remember me </label>
        </section>

        <div class="links">
         <nuxt-link to="/profile"> 
          <at-button size="large">
            <section class="lastResort">Login</section></at-button>
         </nuxt-link>
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