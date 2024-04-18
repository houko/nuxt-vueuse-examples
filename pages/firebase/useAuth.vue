<script setup lang="ts">
import { getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuth } from "@vueuse/firebase/useAuth";

let app;
if (!getApps().length) {
  app = initializeApp({
    apiKey: "AIzaSyDYFNCnRp4z-GIDAOb-emE7ZkVAv4HSYUE",
    projectId: "myetc-3398c",
    authDomain: "myetc-3398c.firebaseapp.com",
  });
} else {
  app = getApps()[0]; // Use the already initialized Firebase app
}

const auth = getAuth(app);
const { isAuthenticated, user } = useAuth(auth);

const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());
</script>

<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">Sign In with Google</button>
  </div>
</template>
