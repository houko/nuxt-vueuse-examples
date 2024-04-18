<script setup lang="ts">
import { computed, ref } from "vue";
import {
  collection,
  doc,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";
import { useFirestore } from "@vueuse/firebase/useFirestore";

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

const db = getFirestore(app);
const todos = useFirestore(collection(db, "todos"));
console.log(todos.value);

// or for doc reference
const user = useFirestore(doc(db, "users", "XZYgTunHMTNfWhK02PAtyw3fvQC2"));
console.log(user.value);

// you can also use ref value for reactive query
const postsLimit = ref(10);
const postsQuery = computed(() =>
  query(
    collection(db, "posts"),
    orderBy("createdAt", "desc"),
    limit(postsLimit.value),
  ),
);
const posts = useFirestore(postsQuery);
console.log(posts.value);

// you can use the boolean value to tell a query when it is ready to run
// when it gets falsy value, return the initial value
const userId = ref("");
const userQuery = computed(
  () => userId.value && doc(db, "users", userId.value),
);
const userData = useFirestore(userQuery, null);
console.log(userData.value);
</script>

<template></template>
