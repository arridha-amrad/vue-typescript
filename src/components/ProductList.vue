<template>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="card mx-5 mb-3"
      style="width: 12rem;"
    >
      <img :src="product.imgUrl" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)" class="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
// import ProductList from "../mock/producs.json";
import { useStore } from "vuex";
import { ICart, IProduct } from "../interfaces/IProduct";
import { key } from "../store";

export default defineComponent({
  setup() {
    const store = useStore(key);
    const products = computed(() => store.state.products);
    store.dispatch("getProducts");
    // console.log(products.value);

    const addToCart = (product: IProduct) => {
      store.dispatch("addToCart", product);
      // console.log("item added to cart", product);
    };

    return { products, addToCart };
  },
});
</script>

<style scoped>
.card {
  border: none;
}
</style>
