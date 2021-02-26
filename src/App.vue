<template>
  <Header />
  <div class="title">
    <h1>Available Products</h1>
  </div>
  <div class="row mt-3">
    <div class="col-md-8">
      <ProductList />
    </div>
    <div class="col-md-4">
      <Cart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

export default defineComponent({
  name: "App",
  components: { Header, ProductList, Cart },
});
</script>

<style lang="scss">
.title {
  text-align: center;
  margin: 20px 0;
  h1 {
    color: $red;
  }
}
</style>
