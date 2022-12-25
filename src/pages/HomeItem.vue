<template>
  <p>Home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <CardItem @click="item.show = !item.show" 
      :name="`${item.lvl} lvl`" :title="item.title" :body="item.discr"
      :imgUrl="item.img"
      :link="`/${item.alias}`">
      
      <img :src="item.img" :alt="item.title">
      <div v-if="items.show" :item="item"></div>
    </CardItem>
  </div>
</template>

<script>

import CardItem from '@/components/UI/CardItem'
import items from "@/seeders/items.json"
export default {
  components: { CardItem },
  data() {
    return {
      items
    }
  }
}
</script>