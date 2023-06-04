import { TClientData, clientSchema } from "@/schemas/client.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { TfiAgenda } from "react-icons/tfi";


const RegisterForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<TClientData>({
        resolver: zodResolver(clientSchema)
    })

    const { register: RegisterClient } = useAuth()

    const onSubmit = (data: TClientData) => {
        RegisterClient(data)
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                <TfiAgenda className="w-12 h-12" />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Your name</label>
                        <div className="mt-2">
                            <input className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="name"
                                placeholder="Your name"
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="password"
                                placeholder="Your password"
                                {...register("password")}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    You Already registered?
                    <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login here!</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterForm