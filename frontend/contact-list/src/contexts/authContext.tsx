import { ReactNode, createContext, useContext, useState } from "react"
import { parseCookies, setCookie } from "nookies"
import { useRouter } from "next/router"
import api from "@/services/api"
import { TClientData, TClientResponseData, TLoginData } from "@/schemas/client.schema"
import { toast } from 'react-toastify';
import { TContact, TContactResponse } from "@/schemas/contacts.schema"

interface Props {
    children: ReactNode
}

interface AuthProviderData {
    register: (clientData: TClientData) => void;
    login: (loginData: TLoginData) => void;
    client: () => Promise<TClientResponseData>;
    createContact: (contactData: TContact) => void;
    contacts: TContactResponse[] | null;
    setContacts: (contactData: TContactResponse[]) => void;
    deleteContact: (contactId: number) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: Props) => {
    const router = useRouter()

    const [contacts, setContacts] = useState<TContactResponse[]>([]);

    const register = (clientData: TClientData) => {
        api
            .post("/clients", clientData)
            .then(() => {
                toast("Successfully registered", { type: "success" })
                router.push("/");
            })
            .catch((err: any) => {
                console.error(err)
                toast("Failed to register", { type: "error" })
            });
    };

    const login = (loginData: TLoginData) => {
        api
            .post("/login-clients", loginData)
            .then((response) => {
                setCookie(null, "client.token", response.data.token, {
                    maxAge: 60 * 30,
                    path: "/"
                });
            })
            .then(() => {
                toast("Successfully logged in", { type: "success" })
                router.push("/");
            })
            .catch((err: any) => {
                console.error(err)
                toast("Failed to login", { type: "error" })
            });
    };

    const client = () => {
        const { "client.token": token } = parseCookies();
        return api
            .get("/clients", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setContacts(response.data.contacts);
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((err: any) => {
                console.error(err);
                toast("Failed to fetch client", { type: "error" });
                return null
            });
    };

    const createContact = (contactData: TContact) => {
        const { "client.token": token } = parseCookies();
        return api
            .post("/contacts", contactData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 201) {
                    toast("Created new contact", { type: "success" })
                    setContacts([...contacts, response.data]);
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((err: any) => {
                console.error(err);
                toast("Failed to create contact", { type: "error" });
            });
    }

    const deleteContact = (contactId: number) => {
        const { "client.token": token } = parseCookies();
                return api
                  .delete(`/contacts/${contactId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                  .then((response) => {
                        if (response.status === 204) {
                            toast("Deleted contact", { type: "success" })
                            setContacts(contacts.filter((contact) => contact.id!== contactId));
                            return response.data;
                        } else {
                            return null;
                        }
                    })
                  .catch((err: any) => {
                        console.error(err);
                        toast("Failed to delete contact", { type: "error" });
                    });
    }


    return (
        <AuthContext.Provider value={{ register, login, client, createContact, contacts, setContacts, deleteContact }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)