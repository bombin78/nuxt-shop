<template>
  <div class="card">
      <div class="card-body">
          <h1>Корзина товаров</h1>
          <table class="table table-bordered table-hover">
              <tbody>
                  <tr v-for="item in $store.state.cart" :key="item.product.id">
                      <td>{{ item.product.title }}</td>
                      <td>{{ item.product.price }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>{{ item.product.price * item.quantity }} руб</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td colspan="4" style="text-align: right">
                          <strong>Итого: {{ $store.getters.cartTotalPrice}}</strong>
                      </td>
                  </tr>
              </tfoot>
          </table>
      </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
