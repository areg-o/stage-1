import apiClient from "@/lib/apiClient";
import type { ICharacter, IUser } from "@/types";

const usersAPI = {
  async getUsers(): Promise<IUser[]> {
    const resp = await apiClient.get<ICharacter>("character");
    return resp.data.results;
  },

  async search(searchText: string): Promise<IUser[]> {
    const resp = await apiClient.get<ICharacter>(
      `character/?name=${searchText}`
    );

    return resp.data.results;
  },
};

export default usersAPI;
