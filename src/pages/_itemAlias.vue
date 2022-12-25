<template>
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.discr">
      <h1 class="title">{{ item.title }}</h1>
      <p>{{ item.discr }}</p>
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>

    </div>
  </div>
</template>

<script>

import items from "@/seeders/items.json"

export default {
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find(el => el.alias === alias);
    this.item = item;

  }
}

</script>
