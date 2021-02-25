<template>
  <div class="mr-3">
    <button v-if="carts.length" class="btn btn-success btn-lg btn-block  mb-3">
      Total : $ {{ totalPrice }}
    </button>
  </div>
  <ul class="list-group mr-3">
    <div v-if="carts.length">
      <div v-for="(cart, index) in carts" :key="index">
        <li v-if="cart.amount > 0" class="list-group-item">
          <div class="media">
            <img :src="cart.imgUrl" class="mr-3 w-25" alt="sada" />
            <div class="media-body">
              <h5 class="mt-0 text-start">{{ cart.title }}</h5>
              <div class="d-flex align-items-center">
                <button
                  @click="increaseAmount(cart)"
                  class="badge badge-primary"
                >
                  +
                </button>
                <div class="mx-3">X - {{ cart.amount }}</div>
                <button
                  @click="decreaseAmount(cart)"
                  class="badge badge-warning"
                >
                  -
                </button>
              </div>
            </div>
            <button @click="deleteFromCart(cart)" class="btn btn-danger">
              <span>&times;</span>
            </button>
          </div>
        </li>
      </div>
    </div>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { ICart, IProduct } from "../interfaces/IProduct";
import { key } from "../store";
export default defineComponent({
  name: "Cart",
  setup() {
    const store = useStore(key);
    const carts = computed(() => store.state.carts);
    const increaseAmount = (item: ICart) => {
      store.dispatch("increaseItem", item);
    };
    const decreaseAmount = (item: ICart) => {
      store.dispatch("decreaseItem", item);
    };
    const deleteFromCart = (item: IProduct) => {
      store.dispatch("deleteItemFromCart", item);
    };
    const totalPrice = computed(() =>
      store.state.carts.reduce((a, b) => a + b.price * b.amount, 0)
    );
    return {
      carts,
      increaseAmount,
      decreaseAmount,
      deleteFromCart,
      totalPrice,
    };
  },
});
</script>

<style scoped>
.btn {
  font-weight: 600;
  font-size: 1rem;
}
.media-body {
  text-align: start;
}
.badge {
  font-size: 1rem;
}
</style>
