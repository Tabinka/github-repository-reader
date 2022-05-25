<template>
  <div class="profile">
    <b-img
      center
      rounded="circle"
      :src="`${profileData.avatar_url}`"
      width="250"
    ></b-img>
    <div class="profile-info">
      <h1>{{ profileData.login }} 👋</h1>
      <div class="row justify-content-sm-center">
        <p class="col-2 col-sm-2 text-center">
          Followers: {{ profileData.followers }}
        </p>
        <p class="col-2 col-sm-2 text-center">
          Following: {{ profileData.following }}
        </p>
      </div>
      <div class="row justify-content-sm-center">
        <a
          class="col-2 col-sm-2 text-center"
          :href="`${profileData.html_url}`"
          target="_blank"
          ><BootstrapIcon icon="github" size="2x"
        /></a>
        <a
          v-if="profileData.twitter_username"
          class="col-2 col-sm-2 text-center"
          :href="`https://twitter.com/${profileData.twitter_username}`"
          target="_blank"
          ><BootstrapIcon icon="twitter" size="2x"
        /></a>
        <p v-else class="col-2 col-sm-2 text-center not-active">
          <BootstrapIcon icon="twitter" size="2x" />
        </p>
        <a
          v-if="profileData.email"
          class="col-2 col-sm-2 text-center"
          :href="`mailto:${profileData.email}`"
          ><BootstrapIcon icon="envelope" size="2x"
        /></a>
        <p v-else class="col-2 col-sm-2 text-center not-active">
          <BootstrapIcon icon="envelope" size="2x" />
        </p>
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
    const profileResponse = await GithubAPI.getGithubData("tabinka")
    data.value = profileResponse.data
  } catch (err) {
    data.value = err
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
