<template>
  <main>
    <h1>{{ product.title }}</h1>
    {{ product.brief }}
  </main>
</template>

<script>
export default {
  computed: {
    product() {
      // через параметры роутера здесь доступен id (формируется динамически из названия файла)
      return this.$store.state.products.find(
        (item) => item.id === parseInt(this.$route.params.id, 10),
      );
    },
  },
  async asyncData({ store }) {
    await store.dispatch("LOAD_PRODUCTS");
  },
  head() {
    return {
      title: this.product.title,
    };
  },
};
</script>
