export default function Footer() {
    const currentYear = new Date().getFullYear()

    return <footer className="grid text-center text-xs p-9 bg-neutral-800">
        <span className="font-bold text-gray-200">My Learning Journal</span>
        <span className=" text-zinc-300">Copyright &copy; {currentYear}</span>
    </footer>
}