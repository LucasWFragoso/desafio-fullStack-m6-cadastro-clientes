import HeaderClient from "@/components/headerClient";
import ListContacts from "@/components/listContacts";
import { useAuth } from "@/contexts/authContext";
import { TClientResponseData } from "@/schemas/client.schema";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const ClientPage: NextPage = () => {
    const [clientData, setClientData] = useState<TClientResponseData | null>(null);
    const auth = useAuth()
    const contacts = auth.contacts;


    useEffect(() => {
        const fetchClientData = () => {
            try {
                auth.client().then((data) => {
                    setClientData(data);
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchClientData();
    }, []);

    return (
        <div>
            {clientData && <HeaderClient {...clientData} />}
            {contacts && <ListContacts contacts={contacts}/>}
        </div>
    )
}

export default ClientPage;