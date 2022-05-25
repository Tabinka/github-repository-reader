<template>
    <div v-if="loader" class="loader">loading...</div>
    <div class="profile">
        <h2>Welcome to repository list of {{ profileData.login }} 👋</h2>
    </div>
    <div class="repositories">
        <div v-for="(data, index) in data" class="repository-block">
            <a :href="`${data.html_url}`" target="_blank">{{ data.name }}</a>
            <p class="description">{{ data.description }}</p>
            <span v-if="data.language">{{ data.language }}</span>
        </div>
    </div>
</template>

<script>

import GithubAPI from '../services/GithubAPI'
import { ref } from 'vue'

export default {
    setup() {

        const data = ref('')
        const profileData = ref('')
        const loader = ref(true)

        const loadRepo = async () => {
            try {
                const response = await GithubAPI.getGithubData("tabinka/repos")
                const profileResponse = await GithubAPI.getGithubData("tabinka")
                profileData.value = profileResponse.data
                data.value = response.data
                console.log(profileResponse)
            } catch (err) {
                data.value = err
            } finally {
                loader.value = false
            }
        }

        loadRepo()

        return {
            data,
            loader,
            profileData
        }
    }
}

</script>