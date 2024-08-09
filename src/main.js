import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerGlobalComponents } from "./utils/import";
import "@/assets/styles/tailwind.css";
import "@/assets/styles/global.css";

let app;
app = createApp(App);

registerGlobalComponents(app);

app.use(router);

app.mount("#app");
