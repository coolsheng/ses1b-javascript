<template>
<section class="container">
<at-button type="primary">Primary Button</at-button>


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


