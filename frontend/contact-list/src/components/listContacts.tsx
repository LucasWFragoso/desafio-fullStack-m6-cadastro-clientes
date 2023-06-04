import { useAuth } from "@/contexts/authContext";
import { TContactResponse } from "@/schemas/contacts.schema";
import { BsTrash } from "react-icons/bs"

interface ListContactsProps {
    contacts: TContactResponse[];
}
const ListContacts = ({ contacts }: ListContactsProps) => {
    const { deleteContact } = useAuth()

    const sortedContacts = contacts.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
    });


    return (
        <div className="mt-20">
            <ul className="flex justify-center flex-wrap gap-3">
                {sortedContacts.map((contact) => (
                    <li key={contact.id} className="bg-gray-100 rounded-md p-4 card">
                        <h3 className="font-bold">{contact.name}</h3>
                        <p><strong>Email: </strong>{contact.email}</p>
                        <p><strong>Telefone: </strong>{contact.telefone}</p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => deleteContact(contact.id)}>
                            <BsTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContacts;