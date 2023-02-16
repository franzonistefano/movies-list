<script setup>
   import EditIcon from './icons/Edit.vue'
   import CancelIcon from './icons/Cancel.vue'
   import SaveIcon from './icons/Save.vue'
   import DeleteIcon from './icons/Delete.vue'

   defineProps({
      movie: {
        type: Object,
        required: true
      }
    })
</script>

<template>
        <div class="card">
          <h2 v-if="!editOn" class="title">{{ movie.title }}</h2>
          <input v-if="editOn" type="text" v-model="newMovieTitle">

          <button v-if="editOn" @click="cancelEditMovie()"><CancelIcon /> Cancel</button>
          <button v-if="editOn" @click="saveNewTitle()"><SaveIcon /> Save</button>

          <button v-if="!editOn" @click="editMovie()"><EditIcon /> Edit</button>
          <button v-if="!editOn" @click="deleteMovie()"><DeleteIcon /> Delete</button>
        </div>
</template>

<script>
export default {
  data() {
      return {
        editOn: false,
        newMovieTitle: ""
      };
    },
    methods: {
        editMovie() {
          this.editOn = true;
        },
        saveNewTitle() {
          this.editOn = false
          const newMovie = {
            id: this.movie.id,
            title: this.newMovieTitle
          }
          this.$emit('edit', newMovie)
        },
        cancelEditMovie() {
          this.editOn = false
        },
        deleteMovie() {
            this.$emit('delete', this.movie)
        }
    },
    created() {
        this.newMovieTitle = this.movie.title
    },
 }
</script>

<style scoped>
.card {
    width: 300px;
    border-radius: 8px;
    background-color: #FFFDFB;
    margin: 30px 10px;
    box-shadow: 0rem 0.6rem 0.9rem rgb(0 0 0 / 20%);
}

.title {
      color: #831010;
      font-weight: bold;
}
</style>