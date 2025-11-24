import { createApp } from "vue";
import "./styles/mug.scss";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth"; 

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);
app.use(pinia);

const store = useBeverageStore();
store.init().then(() => {
  app.mount("#app");
  console.log("App mounted after Firestore data loaded");
  
 
  onAuthStateChanged(auth, (user) => {
    console.log('🔐 Auth state changed:', user?.email || 'No user');
    store.setUser(user);
  });
});
