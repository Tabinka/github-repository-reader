<template>
    <Profile />
  <div class="repositories">
    <div v-for="(data, index) in data" class="repository-block">
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
        const response = await GithubAPI.getGithubData(`${localStorage.getItem('username')}/repos`)
        data.value = response.data
      } catch (err) {
        console.log(err)
      }
      return data
    }

export default {
    components: {
        Profile,
    },
    methods: {
        randomColor: () => {
            let colors = ["blue", "red", "yellow", "green"]
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
