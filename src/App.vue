<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const urlParams = new URLSearchParams(window.location.search)

if(urlParams.has('username')){
    localStorage.setItem('username', urlParams.get('username'))
}else if(localStorage.getItem('username') == null){
    localStorage.setItem('username', "tabinka")
}

</script>

<template>
  <Header />
  <Footer />
</template>

