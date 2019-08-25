<template>
  <main class="mb-4">
      <h1>Каталог товаров</h1>
      <div class="row">
          <div v-for="item in products" :key="item.id" class="col-sm-4">
              <div class="card">
                <div class="card-header">{{ item.title }}</div>
                <div class="card-body">
                    <p>{{ item.price }}</p>
                    <nuxt-link :to="'/catalog/' + item.id + '/'">Подробнее</nuxt-link>
                </div>
              </div>
          </div>
      </div>
  </main>
</template>
<script>
  export default {
    async asyncData({ store }){
      store.dispatch('LOAD_PRODUCTS');
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
  };
</script>
