import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/global.css";

const app = createApp(App);

app.use(store, key);

app.mount("#app");
