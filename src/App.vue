<template>
  <Header />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
