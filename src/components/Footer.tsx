export function Footer() {
    return (
        <footer className="w-full border-t-8 border-b-8 border-emerald-600 py-5 text-center bg-zinc-100">
            <span>
                &copy; {new Date().getFullYear()} - Todos os direitos são
                reservados
            </span>
        </footer>
    );
}
