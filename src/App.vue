<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import { site } from './_config.js'
import Header from '@/components/HeaderItem.vue'
import Footer from '@/components/FooterItem.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
