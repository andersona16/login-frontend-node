import React, { createContext, useContext, useState, ReactNode } from "react";
import api from "../services/api";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getTokenFromLocalStorage = (): string | null =>
  localStorage.getItem("authToken");

const storeTokenInLocalStorage = (token: string) => {
  localStorage.setItem("authToken", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("authToken");
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(getTokenFromLocalStorage());

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<{ token: string }>("/auth/login", {
        email,
        password,
      });
      const { token } = response.data;

      setToken(token);
      storeTokenInLocalStorage(token);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setToken(null);
    removeTokenFromLocalStorage();
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });
    } catch (error: any) {
      // Re-throw or handle error here if needed
      if (error.response && error.response.data) {
        throw new Error(
          error.response.data.msg || "Unknown registration error"
        );
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Registration failed due to an unknown error");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
