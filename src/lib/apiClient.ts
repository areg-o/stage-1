import axios from "axios";

const _apiBase = "https://rickandmortyapi.com/api/";

const apiClient = axios.create({
  baseURL: _apiBase,
});

export default apiClient;
