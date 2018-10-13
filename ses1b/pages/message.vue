<template>

<section align="center">
    

    <div class="clear">
    <at-textarea  class="textarea"
             spellcheck="true" draggable="false" rows="15" placeholder="Message (optional)">
             </at-textarea>
    </div><br>
    
    <section style="margin-top:110px">
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
         <at-button style="margin-top: 40px;" type="primary">Send Message</at-button>
    </div>
    </section>
</section>

</template>

<script>
export default {
    
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

.textarea {
 width: 365px; 
 height: 150px;
 padding-left:75px;
 padding-top:10px;
 resize: none;
}

</style>
