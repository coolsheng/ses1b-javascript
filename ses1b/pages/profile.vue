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
 

    <div v-show="current==0">
      <div class="clear">
          <p class="intro-font">Personal Information</p>
      </div>
      
      <div class="clear">
          <p class="block">► Name</p> 
              <at-input v-model="inputValue" placeholder="Full Name" filterable size="large" class="input-field"></at-input>
      </div>
      
      <div class="clear">
          <p  class="block">► Gender</p> <br>
            <at-radio-group v-model="radio3" style="margin-right: 143px ; padding-top:2px " >
              <at-radio label="1">Male</at-radio>
              <at-radio label="2">Female</at-radio>
              <at-radio label="3">Other</at-radio>
            </at-radio-group> 
      </div>
      
      <div class="clear">
           <p class="block">► Birthday</p><br>
            
            <div style="margin-left:28px">

            <div class="clear">
                <p class="block">☛  Day</p> 
            </div>
            
            <div class="clear">
                <div class="row no-gutter">
                  <div class="col-md-4">
                  <at-input-number :min="1" :max="31" style="margin-left:35px" ></at-input-number>
                  </div>
                </div>
            </div>

            <div class="clear">
                <p class="block">☛  Month</p> 
            </div>

             <div class="clear">
                  <div class="row no-gutter">
                      <div class="col-md-4">
                      <at-select v-model="model8" filterable size="large" style="margin-left:35px">
                      <at-option value="1">January</at-option>
                      <at-option value="2">February</at-option>
                      <at-option value="3">March</at-option>
                      <at-option value="4">April</at-option>
                      <at-option value="5">May</at-option>
                      <at-option value="6">June</at-option>
                      <at-option value="7">July</at-option>
                      <at-option value="8">August</at-option>
                      <at-option value="9">September</at-option>
                      <at-option value="10">October</at-option>
                      <at-option value="11">November</at-option>
                      <at-option value="12">December</at-option>
                      </at-select> 
                      </div>
                  </div>
              </div>
            
            <div class="clear">
                <p class="block">☛  Year</p> 
            </div>
            
            <div class="clear">
                <div class="row no-gutter">
                  <div class="col-md-4">
                  <at-input-number :min="1947" :max="2018" style="margin-left:35px" ></at-input-number>
                  </div>
                </div>
            </div>
          </div>  

      </div>
      
      
    </div>

    <div v-show="current==1">
       <div class="clear">
          <p class="intro-font">Physical Information</p>
       </div>

        <div class="clear">
            <p class="block">► Height(cm)</p> 
        </div>
        
        
        <div class="clear">
            <div class="row no-gutter">
              <div class="col-md-4">
              <at-input-number v-model="num2" :step="0.1" :min="0" style="margin-left:35px" ></at-input-number>
              </div>
            </div>
        </div>
        
        <div class="clear">
          <p class="block">► Weight(kg)</p> 
        </div>

        <div class="clear">
            <div class="row no-gutter">
              <div class="col-md-4"  >
              <at-input-number v-model="num2" :step="0.1" :min="0" style="margin-left:35px" ></at-input-number>
              </div>
        </div>
         
       </div>
       
    </div>

    <div v-show="current==2">
         <div class="clear">
              <p class="intro-font">Medical Information</p>
          </div>      
      <at-textarea class="textarea" rows="14" placeholder="Please tell us about any pre-existing conditions"></at-textarea>
    </div>



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


