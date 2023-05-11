import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-gray-200 flex">
            <aside className="bg-emerald-600 w-64 p-4 flex flex-col items-center">
                <Image
                    src="/logo.svg"
                    alt="Application Logo"
                    height={100}
                    width={100}
                />

                <ul className="w-full mt-16 flex flex-col gap-4">
                    <li className="h-10 bg-white rounded flex items-center px-3 font-semibold cursor-pointer hover:shadow-lg">
                        Home
                    </li>
                    <li className="h-10 rounded text-white flex items-center px-3 font-semibold cursor-pointer hover:bg-white/20 transition-colors">
                        CNH
                    </li>
                </ul>
            </aside>
            <div className="flex-1 p-4 flex flex-col gap-4">
                <header>
                    <nav className="flex items-center justify-end h-10">
                        <ul className="flex items-center gap-4">
                            <li className="text-lg text-zinc-500 font-semibold hover:text-zinc-700 hover:underline hover:underline-offset-2 cursor-pointer transition-all">
                                <Link href="/login">Entrar</Link>
                            </li>
                            <li className="text-lg text-zinc-500 font-semibold hover:text-zinc-700 hover:underline hover:underline-offset-2 cursor-pointer transition-all">
                                <Link href="/register">Cadastrar</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="flex-1 bg-white rounded-lg shadow-lg p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-100 border border-zinc-200 rounded-lg shadow-lg p-4">
                            <h1 className="font-bold text-3xl mb-4">
                                Minha CNH
                            </h1>

                            <p className="flex items-center justify-between">
                                <span className="font-semibold">Nome:</span>
                                <span>Paulo Victor</span>
                            </p>
                            <p className="flex items-center justify-between">
                                <span className="font-semibold">CPF:</span>
                                <span>111.222.333-44</span>
                            </p>
                            <p className="flex items-center justify-between">
                                <span className="font-semibold">RG:</span>
                                <span>1.222.333</span>
                            </p>
                            <p className="flex items-center justify-between">
                                <span className="font-semibold">
                                    Data de nascimento:
                                </span>
                                <span>23/08/1997</span>
                            </p>
                            <p className="flex items-center justify-between">
                                <span className="font-semibold">
                                    Categoria:
                                </span>
                                <span>AB</span>
                            </p>
                            <p className="flex items-center justify-between">
                                <span className="font-semibold">
                                    Data de Vencimento:
                                </span>
                                <span>08/06/2023</span>
                            </p>

                            <button className="bg-emerald-600 rounded font-semibold text-white h-10 hover:bg-emerald-700 transition-colors uppercase mt-8 w-full">
                                Renovar CNH
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
