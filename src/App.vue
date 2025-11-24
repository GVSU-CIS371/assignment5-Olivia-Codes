<template>
  <div>
    <Beverage :beverage="currentBeverageObject" />
    <ul>
      <li>
        <template v-for="temp in store.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="b in store.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="bases"
              :id="`r${b.id}`"
              :value="b.id"
              v-model="store.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="s in store.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrups"
              :id="`r${s.id}`"
              :value="s.id"
              v-model="store.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="c in store.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamers"
              :id="`r${c.id}`"
              :value="c.id"
              v-model="store.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>
    <div class="auth-row">
      <button v-if="!store.user" @click="withGoogle" :disabled="isSigningIn">
        {{ isSigningIn ? 'Signing in...' : 'Sign in with Google' }}
      </button>
      <template v-else>
        <span class="user-label">{{ store.user.displayName || store.user.email }}</span>
        <button @click="signOut">Sign out</button>
      </template>
    </div>
    <p v-if="authError" class="status-message" style="background: #f8d7da; border-color: #f5c6cb; color: #721c24;">
      {{ authError }}
    </p>
    <p v-if="!store.user" class="hint">Please sign in to save beverages</p>
    <input
      v-model="store.beverageName"
      type="text"
      placeholder="Beverage Name"
      :disabled="!store.user"
    />
    <button @click="handleMakeBeverage" :disabled="!store.user">🍺 Make Beverage</button>
    <p v-if="message" class="status-message">
      {{ message }}
    </p>
  </div>
  <div v-if="store.user && store.beverages.length > 0" style="margin-top: 20px">
    <template v-for="beverage in store.beverages" :key="beverage.id">
      <input
        type="radio"
        name="saved-beverage"
        :id="beverage.id"
        :value="beverage"
        @change="store.showBeverage(beverage)"
      />
      <label :for="beverage.id">{{ beverage.name }}</label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import type { BeverageType } from './types/beverage';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';

const store = useBeverageStore();

const message = ref("");
const authError = ref("");
const isSigningIn = ref(false);

const currentBeverageObject = computed((): BeverageType => {
  const base = store.bases.find(b => b.id === store.currentBase) || store.bases[0];
  const creamer = store.creamers.find(c => c.id === store.currentCreamer) || store.creamers[0];
  const syrup = store.syrups.find(s => s.id === store.currentSyrup) || store.syrups[0];
  
  return {
    id: '',
    name: store.beverageName || 'Preview',
    temp: store.currentTemp,
    base,
    creamer,
    syrup,
    userId: store.user?.uid || '' // userId matches the type definition
  };
});

const showMessage = (txt: string) => {
  message.value = txt;
  setTimeout(() => {
    message.value = "";
  }, 5000);
};

const withGoogle = async () => {
  if (isSigningIn.value) return;
  
  isSigningIn.value = true;
  authError.value = '';
  const provider = new GoogleAuthProvider();
  
  try {
    await signInWithPopup(auth, provider);
    console.log('Signed in successfully');
  } catch (error: any) {
    console.error('Sign-in error:', error);
    authError.value = error.message || 'Failed to sign in with Google';
  } finally {
    isSigningIn.value = false;
  }
};

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    authError.value = '';
    message.value = '';
  } catch (error: any) {
    console.error('Sign-out error:', error);
    authError.value = error.message || 'Failed to sign out';
  }
};

const handleMakeBeverage = async () => {
  const txt = await store.makeBeverage();
  showMessage(txt);
};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

label {
  color: #ffffff;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #634caf;
  color: white;
  font-weight: bold;
  
  &:hover:not(:disabled) {
    background: #7445a0;
  }
  
  &:disabled {
    background: #999;
    cursor: not-allowed;
    opacity: 0.6;
  }
}

input[type="text"] {
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.auth-row {
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-label {
  color: #ffffff;
  font-size: 0.9rem;
}

.hint {
  margin-top: 4px;
  color: #ffffff;
  font-size: 0.85rem;
}

.status-message {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  font-size: 0.9rem;
}
</style>