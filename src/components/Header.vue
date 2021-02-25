<template>
  <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Navbar</span>
    <span class="navbar-brand mb-0 h1">Cart {{ totalQuantity }}</span>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
export default defineComponent({
  setup() {
    const store = useStore(key);
    const totalQuantity = computed(() =>
      store.state.carts.reduce((a, b) => a + b.amount, 0)
    );
    return { totalQuantity };
  },
});
</script>

<style></style>
