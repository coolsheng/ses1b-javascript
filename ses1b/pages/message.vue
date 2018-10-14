<template>

<section align="center">

    <p>Select your doctor:</p>
      <at-select v-model="model2" style="width: 150px; margin-top: 20px">
  <at-option value="1">Test Doctor1</at-option>
  <at-option value="2">Test Doctor 2</at-option>

</at-select>  

    <div class="clear">
    <at-textarea v-model="wow" style="width: auto; margin-top: 10px; padding-left: 5px; padding-right: 5px"
             spellcheck="true" draggable="false" rows="5" placeholder="Message (optional)">
             </at-textarea>
    </div><br>

    <section style="margin-top:10px">
    <div class="clear">
         <p class="intro-font">Capture Image </p>
    </div>
    
    <div class="clear">
        <div style="margin-right:145px">
             <input  type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput">
         </div>
    </div>
   
    <div class="clear">
         <p class="intro-font">Upload File </p>
    </div>

     <div class="clear">
         <div style="margin-right:145px">
              <input type="file" capture="camera" accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="cameraInput" name="cameraInput">
         </div>
     </div>
   
    <div class="clear">
         <at-button style="margin-top: 40px;" type="primary" @click="refresh()">Send Message</at-button>
    </div>
    </section>
</section>

</template>

<script>
export default {
    data(){return{
        wow: ""
    }},
    methods:{
        refresh(){
            // window.location.reload(false);
          this.$Message.loading('Sending message')
            this.wow ="";
                console.log(this.wow);
}
    }
}
</script>


<style scoped>

.intro-font{
  padding:10px; 
  float:left;   
  font-weight: 300;font-size: 20px;color: #35495e;
  letter-spacing: 1px; text-decoration: underline;
  text-decoration-color: rgb(219, 59, 59) ; 
  text-underline-position: under;
  }
.clear{
  clear: both;
  }


</style>
