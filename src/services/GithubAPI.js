import API from './API'

export default {
    getRepo(value) {
        return API().get(`/users/${value}/repos`)
    },
    getUser(value) {
        return API().get(`/users/${value}`)
    }

}