import API from './API'

export default {
    getGithubData(value) {
        return API().get(`/users/${value}`)
    }
}