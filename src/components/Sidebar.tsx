import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CreditCard, House } from "phosphor-react";

export function Sidebar() {
    const { pathname } = useRouter();
    const linkStyle =
        "h-10 rounded text-white flex items-center gap-2 px-3 font-semibold cursor-pointer hover:bg-white/20 transition-colors";

    return (
        <aside className="bg-emerald-600 w-64 p-4 flex flex-col items-center">
            <Image
                src="/logo.svg"
                alt="Application Logo"
                height={100}
                width={100}
            />

            <ul className="w-full mt-16 flex flex-col gap-4">
                <li>
                    <Link
                        href="/"
                        className={`${linkStyle} ${
                            pathname === "/" ? "bg-white/20" : ""
                        }`}
                    >
                        <House
                            size={20}
                            weight={pathname === "/" ? "fill" : "regular"}
                        />
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/cnh"
                        className={`${linkStyle} ${
                            pathname === "/cnh" ? "bg-white/20" : ""
                        }`}
                    >
                        <CreditCard
                            size={20}
                            weight={pathname === "/cnh" ? "fill" : "regular"}
                        />
                        CNH
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
