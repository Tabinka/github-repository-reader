<template>
  <div class="alert alert-danger" role="alert" v-if="data.message">{{ data.message }}</div>
    <Profile />
  <div class="repositories">
    <div v-for='(data, index) in data' :key='index' class="repository-block">
      <a :href="`${data.html_url}`" target="_blank">{{ data.name }}</a>
      <p class="description">{{ data.description }}</p>
      <span v-if="data.language" :class="`${randomColor()}`">{{ data.language }}</span>
    </div>
  </div>
</template>

<script>
import GithubAPI from "../services/GithubAPI"
import { ref } from "vue"
import Profile from "@/components/Profile.vue"
    
    const data = ref("")

    const loadRepo = async () => {
      try {
        const response = await GithubAPI.getGithubRepos(localStorage.getItem('username'))
        data.value = response.data
      } catch (err) {
        data.value = err
      }
      return data
    }

export default {
    components: {
        Profile,
    },
    methods: {
        randomColor: () => {
            const colors = ["blue", "red", "yellow", "green"]
            let chosenColor = Math.floor(Math.random() * colors.length)
            return colors[chosenColor]
        }
    },
  async setup() {
    const data = await loadRepo()
    return {
      data
    }
  },
}
</script>
