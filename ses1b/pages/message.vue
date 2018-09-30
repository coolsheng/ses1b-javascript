<template>

<section align="center">

    <at-textarea v-model="inputValue3" autosize placeholder="Message (optional)"></at-textarea>
    <p>Capture Image </p>
       <input  type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput">
    <p>Upload File </p>
       <input type="file" capture="camera" accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="cameraInput" name="cameraInput">

<at-button style="margin-top: 200px;" type="primary">Send Message</at-button>

</section>

</template>

