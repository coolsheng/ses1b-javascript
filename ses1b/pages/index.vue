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
      <div class="links">
        <nuxt-link to="/profile"> 
        <at-button size="large"  >Login</at-button>
        </nuxt-link>
      </div>



    <script src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="241608656701-phqaco84cfvd1ocs0btuidk1t7f0j0ra.apps.googleusercontent.com.apps.googleusercontent.com">
<div style="padding-top: 15px" class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
      </section>
      
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  layout: 'blank',
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.container {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.textContainer {
padding-top: 10px
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
  padding-top: 15px;
}
</style>

