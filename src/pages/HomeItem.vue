<template>
  <div>
    <carousel :settings="settings">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <CardItem @click="item.show = !item.show" :name="`${item.lvl} lvl`" :title="item.title" :body="item.descr"
          :imgUrl="item.img" :link="`/${item.alias}`">

          <img :src="item.img" :alt="item.title">
          <div v-if="items.show" :item="item"></div>
          <template v-slot:body>{{ item.descr }}</template>

          <template v-slot:footer>
           <CardFooter :item='item'/>
          </template>

        </CardItem>
      </slide>

      <!-- addons -->
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import CardItem from '@/components/UI/CardItem'
import items from "@/seeders/items.js"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CardFooter from '../components/UI/CardFooter.vue'


export default {
  components: {
    CardFooter,
    CardItem,
    Carousel,
    Slide,
    Navigation
  },

  data() {
    return {
      settings: {
        itemsToShow: 1,
        wrapArround: true,
        snapAlign: 'center'
      },
      items
    }
  }
}
</script>

<style>
.card__wrapper {
  text-align: center
}
</style>