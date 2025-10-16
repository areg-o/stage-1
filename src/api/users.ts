import axios from 'axios'
import type { IUser } from './userType'
import apiClient from "../lib/apiClient"

const usersAPI = {

    async getUsers() {
        try {
            const resp = await apiClient.get<IUser[]>("/users")
            return resp.data
        } catch (error) {
            return `An error occurred: ${error}`
        }
    },

    async getUserById(id: number) {
        try {
            const resp = await axios.get<IUser>(`/users/${id}`)
            return resp.data
        } catch (error) {
            return `An error occurred: ${error}`
        }
    }

}

export default usersAPI

