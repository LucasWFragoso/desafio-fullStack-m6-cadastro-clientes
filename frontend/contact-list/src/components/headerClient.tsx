import { TClientResponseData } from "@/schemas/client.schema";
import { TfiAgenda } from "react-icons/tfi";
import { FaPlus } from 'react-icons/fa';
import { useState } from "react";
import CreateContactModal from "./createContactModal";


const HeaderClient = (client: TClientResponseData) => {
    const { name, email, telefone } = client;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-indigo-400 p-4 shadow-md">
            <div className="flex items-center">
                <h1 className="text-2xl font-sans font-semibold">{name}</h1>
            </div>
            <div className="flex items-center gap-2">
                <TfiAgenda className="w-10 h-10" />
            </div>
            <div className="flex items-center">
                <a className="flex items-center" href="#" onClick={openModal}>
                    <FaPlus style={{ marginLeft: '0.5rem' }} />
                </a>
            </div>
            <CreateContactModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    )
}
export default HeaderClient