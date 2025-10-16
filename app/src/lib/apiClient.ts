import axios from 'axios'

const _apiBase = "https://jsonplaceholder.typicode.com"

const apiClient = axios.create({
    baseURL: _apiBase,
})

export default apiClient