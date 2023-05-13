import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer } from "@/components/Footer";

const createLoginUserSchema = z.object({
    user: z.string().nonempty("O campo é obrigatório"),
    password: z
        .string()
        .nonempty("O campo é obrigatório")
        .min(8, "A senha precisa de no mínimo 8 caracteres"),
});

type CreateLoginUserFormData = z.infer<typeof createLoginUserSchema>;

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateLoginUserFormData>({
        resolver: zodResolver(createLoginUserSchema),
    });

    async function logInUser(data: CreateLoginUserFormData) {
        try {
            setIsLoading(true);
            await axios.post("/api/login", data);
            router.push("/");
        } catch (err: any) {
            alert(err.response.data.message ?? "Aconteceu um erro");
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
                    onSubmit={handleSubmit(logInUser)}
                    className="flex flex-col gap-4 w-full max-w-xl border border-zinc-300 rounded-lg p-5 bg-zinc-100 shadow-sm"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user">Usuário:</label>
                        <input
                            type="text"
                            id="user"
                            placeholder="Informe seu nome"
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
                        {isLoading ? "Carregando..." : "Entrar"}
                    </button>

                    <Link
                        href="/register"
                        className="flex justify-center cursor-pointer hover:underline underline-offset-2 font-medium"
                    >
                        Fazer cadastro
                    </Link>
                </form>
            </main>

            <Footer />
        </div>
    );
}
