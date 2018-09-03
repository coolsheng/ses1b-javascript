<template>
<section class="container">
  <div class="alignSteps">
<at-steps :current='current'>
  <at-step v-for="(step, index) in steps"
    :title="step.title"
    :key="index"></at-step>
</at-steps>
  </div>
<div>
  <div v-show="current==0">
    <p>Personal Information</p>
    
    
  </div>

  <div v-show="current==1">
    <p>Physical Information</p>
  </div>

  <div v-show="current==2">
    <p>Medical Information</p>
  </div>
</div>


<at-button type="primary" @click="previousStep" style="margin-top: 12px;">Prev</at-button>
<at-button type="primary" v-if='current < 2' @click="nextStep" style="margin-top: 12px; margin-left: 12px">Next</at-button>
<nuxt-link to="/homepage"> 
        <at-button v-if='current==2' type="primary" style="margin-top: 12px; margin-left: 12px">Submit</at-button>
</nuxt-link>

</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  layout: 'blank',
      components: {
    AppLogo
  },
data () {
      return {
        current: 0,
        step: 0,
        steps: [{
              step: 1},
            {
              step: 2},
            {
              step: 3,
        }]
      }
    },
    methods: {
      nextStep() {
        if (this.current++ == 2)
          this.current = 2
      },
      previousStep() {
        if (this.current-- <= 0)
          this.current = 0 
      }
    }

}
</script>

<style scoped>
.container {
  margin-top: 10px;
  display: 100px; 
  justify-content: center;
  align-items: center;
  text-align: center;
}
.alignSteps {
margin-left: 75px;
}

</style>


