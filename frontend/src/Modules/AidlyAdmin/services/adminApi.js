import axios from "axios";

const adminApi = axios.create({
  baseURL: "https://aidly-final-merge.onrender.com/api/aidly-admin",
});

adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const login = (credentials) =>
  adminApi.post("/login", credentials);

export const getDashboardStats = () =>
  adminApi.get("/dashboard");

export const getEntities = (entity, params) =>
  adminApi.get(`/${entity}`, { params });

export const getEntityDetail = (entity, id) =>
  adminApi.get(`/${entity}/${id}`);

export const deleteEntity = (entity, id) =>
  adminApi.delete(`/${entity}/${id}`);

export default adminApi;