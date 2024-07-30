import axios, { AxiosInstance } from "axios";

export const ENDPOINT: string = "https://localhost:3000/api/v1/";

export const AxiosUtility: AxiosInstance = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});