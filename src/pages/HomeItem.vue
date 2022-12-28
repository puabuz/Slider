<template>
  <p>Home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <CardItem @click="item.show = !item.show" :name="`${item.lvl} lvl`" :title="item.title" :body="item.descr"
      :imgUrl="item.img" :link="`/${item.alias}`">

      <img :src="item.img" :alt="item.title">
      <div v-if="items.show" :item="item"></div>
      <template v-slot:body>{{ item.descr }}</template>
      <template v-slot:footer>
        <div class="card-stats">
          <div v-for="(stat, index) in item.info" :key="index" class="one-third">
           <div class="stat-value">{{ stat.value }}</div>
           <div class="stat">{{ stat.title }}</div>
          </div>
        </div>
      </template>
    </CardItem>
  </div>
</template>

<script>

import CardItem from '@/components/UI/CardItem'
import items from "@/seeders/items.js"
export default {
  components: { CardItem },
  data() {
    return {
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