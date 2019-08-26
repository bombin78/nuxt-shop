<template>
  <div class="container">
    <header class="row">
      <div class="col-sm-3">
        Логотип
      </div>
      <div class="col-sm-3 offset-sm-6">
        Телефон
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            Главная
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/catalog">
            Каталог
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            О компании
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            Контакты
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <hr class="mb-4">
    <nuxt />
  </div>
</template>
<style>
.nuxt-link-exact-active {
  color: #f00;
}
</style>
