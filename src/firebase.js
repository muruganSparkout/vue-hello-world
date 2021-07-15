import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyCBhrajGDuc7qZzKjTkgvdoHBz1KE0GU-g",
    authDomain: "vue-crud-225f1.firebaseapp.com",
    projectId: "vue-crud-225f1",
    storageBucket: "vue-crud-225f1.appspot.com",
    messagingSenderId: "700632813031",
    appId: "1:700632813031:web:f5f7dfc5cb9b8939294142",
    measurementId: "G-YCESGW98SD"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')


export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  console.log(user);
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}