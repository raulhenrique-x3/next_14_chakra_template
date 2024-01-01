import axios from "axios";

export function client() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return instance;
}
