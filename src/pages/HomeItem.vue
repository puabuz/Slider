<template>
  <p>Home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <CardItem
      :name="`${item.lvl} lvl`" 
      :title="item.title" 
      :body="item.discr" 
      :imgUrl="item.img">
      <img :src="item.img" :alt="item.title">
    </CardItem>>
  </div>
</template>

<script>

import CardItem from '../components/UI/CardItem'
export default {
  components: { CardItem },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          discr: 'Archer Archer Archer Archer Archer',
          img: require('@/assets/image/archer.png'),
          lvl: 4
        },
        {
          id: 2,
          title: 'Barbarian',
          discr: 'Barbarian Barbarian Barbarian Barbarian',
          img: require('@/assets/image/barbarian.png'),
          lvl: 3
        },
        {
          id: 3,
          title: 'Giant',
          discr: 'Giant Giant Giant Giant Giant Giant ',
          img: require('@/assets/image/giant.png'),
          lvl: 2
        },
        {
          id: 3,
          title: 'Goblin',
          discr: 'Goblin Goblin Goblin Goblin Goblin Goblin ',
          img: require('@/assets/image/goblin.png'),
          lvl: 2
        },
        {
          id: 3,
          title: 'Wizard',
          discr: 'Wizard Wizard Wizard Wizard Wizard Wizard ',
          img: require('@/assets/image/wizard.png'),
          lvl: 2
        },
      ]
    }
  }
}
</script>