import Link from "next/link";

export function Header() {
    return (
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
    );
}
