import axios from 'axios'

const api = {

    _apiBase: "https://jsonplaceholder.typicode.com/users",

    async getUsers() {
        const resp = await axios.get(this._apiBase)
        return resp.data
    },

    async getUserById(id: number) {
        const resp = await axios.get(`${this._apiBase}/${id}`)
        return resp.data
    }

}

export default api

