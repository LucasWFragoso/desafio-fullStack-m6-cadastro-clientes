import { ReactNode, createContext, useContext, useState } from "react"
import { setCookie } from "nookies"
import { useRouter } from "next/router"
import api from "@/services/api"
import { ClientData, LoginData } from "@/schemas/client.schema"
import { toast } from 'react-toastify';

interface Props {
    children: ReactNode
}

interface AuthProviderData {
    register: (clientData: ClientData) => void;
    login: (loginData: LoginData) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: Props) => {
    const router = useRouter()

    const register = (clientData: ClientData) => {
        api
        .post("/clients", clientData)
        .then(() => {
            toast("Successfully registered", {type: "success"})
            router.push("/");
        })
        .catch((err: any) => {
            console.error(err)
            toast("Failed to register", {type: "error"})
        });
    };

    const login = (loginData: LoginData) => {
            api
           .post("/login-clients", loginData)
           .then((response) => {
                setCookie(null, "client.token", response.data.token, {});
           })
           .then(() => {
                toast("Successfully logged in", {type: "success"})
                router.push("/");
            })
           .catch((err: any) => {
                console.error(err)
                toast("Failed to login", {type: "error"})
            });
        };
    
    return (
        <AuthContext.Provider value={{register, login}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)