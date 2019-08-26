<template>
  <main>
    <h1>{{ product.title }}</h1>
    {{ product.brief }}
    <hr>
    {{ product.price }} руб.
    <hr>
    <button @click="addToCart" class="btn btn-success">
      Добавить в карзину
    </button>
    <div v-if="showCartMessage" class="alert alert-success">
        Товар успешно добавлен в корзину
    </div>
  </main>
</template>

<script>
export default {
  data() {
      return {
          showCartMessage: false,
      };
  },
  computed: {
    product() {
      // через параметры роутера здесь доступен id (формируется динамически из названия файла)
      return this.$store.state.products.find(
        (item) => item.id === parseInt(this.$route.params.id, 10),
      );
    },
  },
  methods: {
      async addToCart() {
          await this.$store.dispatch('ADD_TO_CART', this.product);
          this.showCartMessage = true;
      }
  },
  async asyncData({ store }) {
    await store.dispatch('LOAD_PRODUCTS');
  },
  head() {
    return {
      title: this.product.title,
    };
  },
};
</script>
