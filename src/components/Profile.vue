<template>
  <div class="profile">
    <b-img
      center
      rounded="circle"
      :src="`${profileData.avatar_url}`"
    ></b-img>
    <div class="profile-info">
      <h1>{{ profileData.login }} 👋</h1>
      <div class="row w-50 justify-content-sm-center">
        <p class="col-sm-4 text-center">
          Followers: {{ profileData.followers }}
        </p>
        <p class="col-sm-4 text-center">
          Following: {{ profileData.following }}
        </p>
      </div>
      <div class="row w-50 justify-content-sm-center">
        <div class="col-sm-2 text-center">
        <a
          :href="`${profileData.html_url}`"
          target="_blank"
          ><BootstrapIcon icon="github" size="2x"
        /></a>
        </div>
        <div class="col-sm-2 text-center">
        <a
          v-if="profileData.twitter_username"
          :href="`https://twitter.com/${profileData.twitter_username}`"
          target="_blank"
          ><BootstrapIcon icon="twitter" size="2x"
        /></a>
        <p v-else class="not-active">
          <BootstrapIcon icon="twitter" size="2x" />
        </p>
        </div>
        <div class="col-sm-2 text-center">
        <a
          v-if="profileData.email"
          :href="`mailto:${profileData.email}`"
          ><BootstrapIcon icon="envelope" size="2x"
        /></a>
        <p v-else class="not-active">
          <BootstrapIcon icon="envelope" size="2x" />
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GithubAPI from "../services/GithubAPI"
import { ref } from "vue"

const data = ref("")

const loadProfile = async () => {
  try {
    const profileResponse = await GithubAPI.getGithubProfileData(localStorage.getItem('username'))
    data.value = profileResponse.data
  } catch (err) {
    console.log(err)
  }
  return data
};

export default {
  async setup() {
    const profileData = await loadProfile()

    return {
      profileData
    }
  },
}
</script>
