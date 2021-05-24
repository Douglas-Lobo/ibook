<template>
  <div class="book-categories">
    <div v-for="categorie in $book.categories" :key="categorie.id" class="chip">
      {{ categorie.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.book-categories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
}

.chip {
  display: inline-block;
  background: #292929;
  font-weight: 700;
  font-size: 13px;
  color: #f7f7f7;
  padding: 6px 19px;
  border-radius: 20px;
}
</style>
