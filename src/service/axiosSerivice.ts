import axios, { AxiosInstance } from "axios";

export const ENDPOINT: string = "https://firearm-be.virtualpolicestation.com/api/v1/";

export const AxiosUtility: AxiosInstance = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});