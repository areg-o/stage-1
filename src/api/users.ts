import axios from 'axios';

import type { IUser } from '@/api/userType';
import apiClient from '@/lib/apiClient';

const usersAPI = {
  async getUsers() {
    const resp = await apiClient.get<IUser[]>('/users');
    return resp.data;
  },

  async getUserById(id: number) {
    const resp = await axios.get<IUser>(`/users/${id}`);
    return resp.data;
  },
};

export default usersAPI;
