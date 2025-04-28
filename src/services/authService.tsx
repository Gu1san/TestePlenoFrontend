import axios from "axios";
import { LoginData, SignupData } from "../types/Auth";

const API_URL = "http://localhost:3000"; // ou a URL do Mockoon

export async function login(data: LoginData) {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
}

export async function signup(data: SignupData) {
  const response = await axios.post(`${API_URL}/signup`, data);
  return response.data;
}
