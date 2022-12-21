<template>
  <p>Home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <CardItem :name="`${item.lvl} lvl`" :title="item.title" :body="item.discr"/>
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
          title: 'LOREM',
          discr: 'Lorem Lorem Lorem Lorem Lorem',
          lvl: 4
        },
        {
          id: 2,
          title: 'Vector',
          discr: 'Vector Vector Vector Vector Vector',
          lvl: 3
        },
        {
          id: 3,
          title: 'Went',
          discr: 'Went Went Went Went Went Went',
          lvl: 2
        },
      ]
    }
  }
}
</script>