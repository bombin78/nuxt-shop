<template>
  <div>
      Товаров в корзине: {{ total }}
  </div>
</template>

<script>
export default {
    name: 'Cart',
    computed: {
        total() {
            return this.$store.state.cart.length;
        }
    },
    async asyncData({ store }) {
        await store.dispatch('LOAD_CART')
    },
}
</script>
