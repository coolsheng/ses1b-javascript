<template>



<div style="max-width: 500px;">
<amplify-sign-up></amplify-sign-up>

    <!-- <section >

<at-input v-model="email" placeholder="email" required></at-input>
<at-input v-model="password" type="password" placeholder="password" required></at-input>
<at-input v-model="name" placeholder="name" required></at-input>

<at-button type="primary">Submit</at-button>
</section>  -->

</div>

</template>

<script>
export default {
      layout: 'blank',

data(){
    return{
        email: "",
        password: "",
        name: ""
    }

}
}

</script>

<style>

</style>
