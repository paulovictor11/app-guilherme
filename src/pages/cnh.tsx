import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Cnh() {
    return (
        <div className="min-h-screen w-full bg-gray-200 flex">
            <Sidebar />

            <div className="flex-1 p-6 flex flex-col gap-6">
                <Header />

                <main className="flex-1 bg-white rounded-lg shadow-lg p-4"></main>
            </div>
        </div>
    );
}
