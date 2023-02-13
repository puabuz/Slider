<template>
  <div>AlignItems</div>
</template>

<script>
import items from "@/seeders/items.js"

export default {
  data() {
    return {
      item: null,
    }
  },
  created() {

    const alias = this.$route.params.itemAlias
    // find возвращает первый элемент по условию или undefined, если ничего не найдено.
    const item = items.find(el => el.alias === alias)
    if (item === undefined) {
      return this.$router.push('/404')
    } else {
      this.item = item
    }
  }
}

</script>

<style lang="scss">

</style>