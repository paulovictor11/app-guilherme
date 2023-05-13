import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const createRegisterUserSchema = z.object({
    name: z.string().nonempty("O campo é obrigatório"),
    email: z
        .string()
        .nonempty("O campo é obrigatório")
        .email("Formato de e-mail inválido"),
    user: z.string().nonempty("O campo é obrigatório"),
    password: z
        .string()
        .nonempty("O campo é obrigatório")
        .min(8, "A senha precisa de no mínimo 8 caracteres"),
});

type CreateRegisterUserFormData = z.infer<typeof createRegisterUserSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRegisterUserFormData>({
        resolver: zodResolver(createRegisterUserSchema),
    });

    async function createUser(data: CreateRegisterUserFormData) {
        try {
            setIsLoading(true);
            await axios.post("/api/create-user", data);
            router.push("/");
        } catch (_) {
            alert("Aconteceu um erro");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-emerald-600 h-5 w-full"></header>
            <main className="flex-1 flex flex-col gap-10 items-center mt-16">
                <Image
                    src="/logo.svg"
                    alt="Application Logo"
                    height={150}
                    width={150}
                />
                <form
                    onSubmit={handleSubmit(createUser)}
                    className="flex flex-col gap-4 w-full max-w-xl border border-zinc-300 rounded-lg p-5 bg-zinc-100 shadow-sm"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Informe seu nome"
                            className="border border-zinc-200 shadow-sm rounded h-10 px-3 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            {...register("name")}
                        />
                        {errors.name && (
                            <span className="text-sm text-red-500 italic">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Informe seu e-mail"
                            className="border border-zinc-200 shadow-sm rounded h-10 px-3 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500 italic">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="user">Usuário:</label>
                        <input
                            type="text"
                            id="user"
                            placeholder="informe seu usuário"
                            className="border border-zinc-200 shadow-sm rounded h-10 px-3 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            {...register("user")}
                        />
                        {errors.user && (
                            <span className="text-sm text-red-500 italic">
                                {errors.user.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Informe sua senha"
                            className="border border-zinc-200 shadow-sm rounded h-10 px-3 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            {...register("password")}
                        />
                        {errors.password && (
                            <span className="text-sm text-red-500 italic">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-emerald-600 rounded font-semibold text-white h-10 hover:bg-emerald-700 transition-colors"
                    >
                        {isLoading ? "Carregando..." : "Cadastrar"}
                    </button>

                    <Link
                        href="/login"
                        className="flex justify-center cursor-pointer hover:underline underline-offset-2 font-medium"
                    >
                        Já possuo conta
                    </Link>
                </form>
            </main>
            <footer className="w-full border-t-8 border-b-8 border-emerald-600 py-5 text-center bg-zinc-100">
                <span>
                    &copy; {new Date().getFullYear()} - Todos os direitos são
                    reservados
                </span>
            </footer>
        </div>
    );
}
