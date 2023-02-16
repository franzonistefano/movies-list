<script setup>
   import AddIcon from './icons/Add.vue'
   import Movie from './Movie.vue';
   import Loader from './Loader.vue';
</script>

<template>
    <div v-if="loading" class="container">
      <Loader></Loader>
    </div>

    <div v-if="!loading" class="grid-container">
      <div class="grid-item">
        <h2 class="title">Write here the movie you want to add</h2>
        <form @submit.prevent="addMovie" class="add-title">
          <input type="text" v-model="newMovieTitle" placeholder="Movie Title">
          <button type="submit" :disabled="!allowSubmitForm"><AddIcon /> Add</button>
        </form>
      </div>
      <div class="grid-item">
        <div v-for="movie in movies" :key="movie.id">
          <Movie 
              :movie="movie"
              @edit="editMovie"
              @delete="deleteMovie"
          ></Movie>
        </div>
      </div>
    </div>
  </template>
  
  <script>
   import { db } from "../firebase.js";
   import { collection, addDoc, doc, setDoc, deleteDoc, query, getDocs, orderBy } from "firebase/firestore"

  export default {
    data() {
      return {
        movies: [],
        newMovieTitle: "",
        loading: false
      };
    },
    created() {
        this.getMovies();
    },
    methods: {
      async getMovies() {
        const querySnap = await getDocs(query(collection(db, "movies"), orderBy('title')));
        this.movies = []
        querySnap.forEach((doc) => {
            this.movies.push({ id: doc.id, ...doc.data() })
        })
        this.updateLoadingState(false)
      },
      addMovie() {
        this.updateLoadingState(true)
        const movieCollectionRef = collection(db, "movies")
        addDoc(movieCollectionRef, { title: this.newMovieTitle })
            .then(() => {
                this.newMovieTitle = "";
                this.getMovies()
            });
      },
      editMovie(movie) {
        this.updateLoadingState(true)
        const movieDocRef = doc(db, 'movies', movie.id)
        setDoc(movieDocRef, { title: movie.title })
        .then(() => {
            this.getMovies()
        })
      },
      deleteMovie(movie) {
        this.updateLoadingState(true)
        const movieDocRef = doc(db, 'movies', movie.id)
        deleteDoc(movieDocRef)
        .then(() => {
            this.getMovies()
        })
      },
      updateLoadingState(state) {
        this.loading = state
      }
    },
    components: {
        Movie,
        Loader
    },
    computed: {
      allowSubmitForm: function() {
            return this.newMovieTitle !== ""
      }
    }
}
</script>

<style scoped>

.container {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: top;
}

.grid-item {
  text-align: center;
}

.title {
  margin-top: 5px;
}

.add-title {
    display: flex;
    justify-content: center;
}
</style>
  