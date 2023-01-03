<template>
  <div>
      <div class="card-stats">
        <div v-for="(stat, index) in this.item.info" :key="index" class="one-third">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props:{
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
    }
  }
}

</script>
