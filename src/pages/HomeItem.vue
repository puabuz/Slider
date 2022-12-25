<template>
  <p>Home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <CardItem
      :name="`${item.lvl} lvl`" 
      :title="item.title" 
      :body="item.discr" 
      :imgUrl="item.img">
      <img :src="item.img" :alt="item.title">
    </CardItem>
  </div>
</template>

<script>

import CardItem from '@/components/UI/CardItem'
import items from "@/seeders/item.json"
export default {
  components: { CardItem },
  data() {
    return {
      items
    }
  }
}
</script>