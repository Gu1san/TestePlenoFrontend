import axios from "axios";
import { LoginData, SignupData, UserData } from "../types/Auth";

const API_URL = "http://localhost:3000"; // URL da API local

// Função para formatar os dados conforme a interface UserData
const formatUserData = (data: any): UserData => {
  return {
    id: data.id || 0,
    name: data.name || "Nome não disponível",
    email: data.email || "Email não disponível",
    bio: data.bio || "Bio não disponível",
    contact: data.contact || "Contato não disponível",
    role: data.role || "Cargo não disponível",
  };
};

export async function login(data: LoginData) {
  try {
    const response = await axios.post(`${API_URL}/login`, data);

    // Simulando a validação de login com base no arquivo auth.json
    if (response.status === 200) {
      const userData = formatUserData(response.data.user);
      return userData; // Retorna os dados formatados
    } else {
      throw new Error("Credenciais inválidas");
    }
  } catch (error) {
    console.error("Erro no login", error);
    throw new Error("Erro no login");
  }
}

export async function signup(data: SignupData) {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);

    // Simulando o comportamento de sucesso no signup
    if (response.status === 200) {
      const userData = formatUserData(response.data.user);
      return userData; // Retorna os dados formatados
    } else {
      throw new Error("Falha no cadastro");
    }
  } catch (error) {
    console.error("Erro no signup", error);
    throw new Error("Erro no signup");
  }
}
