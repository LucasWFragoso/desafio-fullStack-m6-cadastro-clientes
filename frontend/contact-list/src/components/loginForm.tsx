import { TLoginData, loginSchema } from "@/schemas/client.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { TfiAgenda } from "react-icons/tfi";


const LoginForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })

    const { login } = useAuth()

    const onSubmit = async (data: TLoginData) => {
        try {
            await login(data);
            window.location.href = "/clientPage";
        } catch (error) {
            // Trate o erro aqui, se necessário
            console.error("Ocorreu um erro durante o login:", error);
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                <TfiAgenda className="w-12 h-12" />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    Not a member?
                    <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here!</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm