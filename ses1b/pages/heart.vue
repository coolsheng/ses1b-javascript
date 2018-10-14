<template>
<div>
                <video ref="video" id="video" width="auto" height="300" autoplay></video>

<div>
                    <p> {{bpm}} bpm </p>
                    <button @click="calculate()">Calculate</button>
</div>
</div>
</template>

<script>
export default {

    data(){return{
        bpm: 5
    }},
        mounted() { 
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video:  {facingMode: {exact: "environment"}} }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
    }
        },
        methods: {
            calculate(){
            this.bpm = Math.floor((Math.random() * 100) + 20);
            }
        }
}
</script>

<style>

</style>
