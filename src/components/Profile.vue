<template>

<h1>Welcome to repository lister! 👋</h1>

<h2>This is list of repositories from {{ profileData.login }}</h2>

<p>{{ profileData }}</p>

</template>

<script>

import GithubAPI from '../services/GithubAPI'
import { ref } from 'vue'

export default {
    setup() {

        const profileData = ref('')

        const loadProfile = async () => {
            try {
                const response = await GithubAPI.getUser("tabinka")
                profileData.value = response.data
            } catch (err) {
                profileData.value = err
            }
        }

        loadProfile()

        return {
            profileData
        }

    }
}

</script>