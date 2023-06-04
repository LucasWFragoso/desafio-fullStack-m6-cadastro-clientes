import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { MdPersonAddAlt1 } from "react-icons/md"
import { TContact, contactSchema } from "@/schemas/contacts.schema";

interface CreateContactFormProps {
    onClose: () => void;
}

const CreateContactForm:React.FC<CreateContactFormProps> = ( {onClose} )=> {
    const { register, handleSubmit, formState: {errors} } = useForm<TContact>({
        resolver: zodResolver(contactSchema)
    })

    const { createContact } = useAuth()

    const onSubmit = (data: TContact) => {
        createContact(data)
        onClose()
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                <MdPersonAddAlt1 className="w-12 h-12" />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new contact</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="name"
                                placeholder="Name"
                                {...register("name")}
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="email"
                                placeholder="example@.com"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="telefone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                        <div className="mt-2">
                            <input className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="telefone"
                                placeholder="88988888888"
                                {...register("telefone")}
                            />
                            {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateContactForm