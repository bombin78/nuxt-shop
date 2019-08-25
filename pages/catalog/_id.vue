<template>
  <main>
      <h1>{{ product.title }}</h1>
      {{ product.brief }}
  </main>
</template>

<script>
export default {
  async asyncData({ store }){
    store.dispatch('LOAD_PRODUCTS');
  },
  computed: {
    product() {
      // через параметры роутера здесь доступен id (формируется динамически из названия файла)
      return this.$store.state.products.find(item => item.id === parseInt(this.$route.params.id));
    },
  },
};
</script>
