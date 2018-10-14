<template>
<section class="container">
  <section class="stepsAlign">
  <div class="alignSteps">
      <at-steps :current='current'>
          <at-step v-for="(step, index) in steps"
            :title="step.title"
            :key="index">
          </at-step>
      </at-steps>
  </div>
  </section>
 
 

<at-button type="primary" @click="previousStep" style="margin-top: 12px;">Prev</at-button>
<at-button type="primary" v-if='current < 2' @click="nextStep" style="margin-top: 12px; margin-left: 12px">Next</at-button>
<nuxt-link to="/message"> 
<at-button v-if='current==2' type="primary" style="margin-top: 12px; margin-left: 12px">Submit</at-button>
</nuxt-link>

</section>

</template>

<script>

export default {
  layout: 'blank',
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
 
  .block{
  padding:10px; 
  float:left; 
  }
  .clear{
    clear: both;
  }
  .intro-font{
  padding:10px; 
  float:left;   
  font-weight: 300;font-size: 20px;color: #35495e;
  letter-spacing: 1px; text-decoration: underline;
  text-decoration-color: rgb(219, 59, 59) ; 
  text-underline-position: under;
  }
  .input-field{
   width: 240px;
   margin-left: 30px
  }
 .textarea {
 width: 365px; 
 height: 150px;
 padding-left:17px;
 padding-top:10px;
 resize: none;
}


</style>


