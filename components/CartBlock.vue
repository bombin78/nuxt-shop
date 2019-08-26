<template>
  <div>
      Товаров в корзине: {{ cartItemsCount }} на сумму {{ cartTotalPrice }}
      <nuxt-link v-if="cartItemsCount > 0" to="/cart">Перейти в карзину</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CartBlock',
    computed: {
        ...mapGetters(['cartItemsCount', 'cartTotalPrice']),
    },
    async mounted() {
        await this.$store.dispatch('LOAD_CART')
    },
}
</script>
