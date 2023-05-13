import { useRouter } from "next/router";

export function CnhCard() {
    const router = useRouter();

    return (
        <div className="bg-gray-100 border border-zinc-200 rounded-lg shadow-lg p-4">
            <h1 className="font-bold text-3xl mb-4">Minha CNH</h1>

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
                <span className="font-semibold">Data de nascimento:</span>
                <span>23/08/1997</span>
            </p>
            <p className="flex items-center justify-between">
                <span className="font-semibold">Categoria:</span>
                <span>AB</span>
            </p>
            <p className="flex items-center justify-between">
                <span className="font-semibold">Data de Vencimento:</span>
                <span>08/06/2023</span>
            </p>

            <button
                onClick={() => router.push("/cnh")}
                className="bg-emerald-600 rounded font-semibold text-white h-10 hover:bg-emerald-700 transition-colors uppercase mt-8 w-full"
            >
                Renovar CNH
            </button>
        </div>
    );
}
