import API from './API'

export default {
    getGithubRepos(value) {
        return API().get(`/users/${value}/repos`)
    },
    getGithubProfileData(value) {
        return API().get(`/users/${value}`)
    }
}