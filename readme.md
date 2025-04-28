# Projeto: Aplicação de Login e Cadastro

Este projeto foi desenvolvido como parte de um processo seletivo para testar as habilidades em desenvolvimento de uma aplicação web com React. Ele consiste em uma aplicação simples de login e cadastro, com comunicação com uma API Mockada usando Mockoon. 

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Como Testar a API Localmente](#como-testar-a-api-localmente)
- [Funcionalidades](#funcionalidades)
- [Comunicação com a API](#comunicação-com-a-api)
- [Prints e Vídeos](#prints-e-vídeos)

## Visão Geral

Este projeto tem como objetivo demonstrar habilidades no desenvolvimento de um sistema de login e cadastro com React, incluindo integração com uma API mockada para simulação do backend. O projeto utiliza o Mockoon para criar uma API fictícia, e toda a lógica de comunicação com o backend é feita de forma assíncrona com axios.

### Funcionalidades

- **Tela de Login**: Permite que o usuário insira suas credenciais para acessar a aplicação.
- **Tela de Cadastro**: Permite o registro de novos usuários.
- **Validação de Formulários**: Valida a entrada de dados (e.g., email, senha, confirmação de senha) antes de enviar os dados para a API.
- **Feedback para o Usuário**: Mensagens de sucesso e erro são exibidas com base na resposta da API.
- **Armazenamento do Token**: O token retornado após o login é armazenado para simular a autenticação em um ambiente real.

## Tecnologias Utilizadas

- **Frontend**: React, axios
- **API Mockada**: Mockoon
- **Outras**: React Router, React Hook Form, Yup para validação de formulários

## Estrutura de Pastas

A estrutura do projeto segue a seguinte organização:
```plaintext
  /src
    /assets # Imagens e ícones
    /components # Componentes reutilizáveis como botão, campos de formulário, etc.
    /contexts # Gerenciamento de dados do usuário
    /mocks # Arquivo de dados mockados, incluindo o auth.json
    /pages # Páginas principais da aplicação (Login, Cadastro, Home)
    /routes # Navegação das páginas
    /services # Funções que lidam com a comunicação com a API
    /styles # Estilos globais e armazenamento de valores como cor, fonte, etc
    /types # Definições de tipos e interfaces
  /App.js # Arquivo principal que gerencia o roteamento e a renderização dos componentes
/index.js # Ponto de entrada para o React
```

## Como Rodar o Projeto

### 1. Clonando o Repositório

```bash
git clone https://github.com/Gu1san/TestePlenoFrontend.git
cd seu-repositorio
```

### 2. Instalando as dependências
```bash
npm install
```

### 3. Rodando o projeto
```bash
npm start
npm run dev
```

## Como testar a API localmente

Para rodar a API mockada, você deve usar o Mockoon, que já está configurado no projeto. Siga as etapas abaixo para configurar o Mockoon:

Abra o Mockoon.

Importe o arquivo auth.json localizado na pasta /src/mocks para o Mockoon.

Inicie o servidor do Mockoon na porta 3000 (ou outra de sua escolha).

### Funcionalidades
Login: O usuário pode fazer login inserindo seu email e senha. O retorno da API inclui um token de autenticação.

Cadastro: O usuário pode criar uma conta fornecendo nome, email, senha e outras informações. A API retornará um usuário simulado e um token.

##  Comunicação com a API

O projeto se comunica com a API usando um **único service** localizado na pasta `/services`, chamado `authService`.

- O `authService` é responsável tanto pela funcionalidade de **login** quanto de **cadastro**.
- As funções dentro do service (`login` e `signup`) fazem a chamada HTTP e tratam a resposta para retornar o usuário no formato esperado.
- O contexto (`AuthContext`) consome o usuário tratado para armazenar o estado de autenticação.

A comunicação segue o fluxo:

1. A tela chama a função correta do `authService` (`login` ou `signup`).
2. O service faz a requisição HTTP e trata os dados.
3. O contexto salva os dados no estado global.

---

### Exemplo de fluxo no cadastro:

```tsx
const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signupService({
        name,
        email,
        password,
        bio,
        contact,
        role,
      });
      login(data); // salva no contexto
      setToastType("success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setToastType("error");
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      console.error("Erro ao cadastrar", error);
    }
    setShowToast(true);
  };
```

---

### Exemplo resumido do `authService`:

```tsx
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
```

---

- Mesmo usando um arquivo `.json` local (`/auth.json`) como simulação de API, o service já trata a resposta como se viesse de um servidor real.
- A estrutura respeita o contrato da interface `UserData`.

>  **Nota**: Caso o projeto seja adaptado futuramente para usar uma API real, basta atualizar os métodos dentro do `authService`, sem precisar alterar a lógica das telas ou do contexto.

## Prints e Vídeos
### Login
![image](https://github.com/user-attachments/assets/8f2f4ab1-7578-4098-807a-8387625364d1)

### Cadastro
![image](https://github.com/user-attachments/assets/abb54f8b-6492-479e-afad-00ceb0931558)

### Home
![image](https://github.com/user-attachments/assets/66b57668-1428-4ac6-a241-d116025d9299)

### Responsividade

https://github.com/user-attachments/assets/2ae69dd0-fe77-4d0e-a174-c6f3ef2a7d01

