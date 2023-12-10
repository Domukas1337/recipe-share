import navbarComponents from "./NavbarComponents";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar () {
    return (
        <nav className="bg-gray-400 backdrop-blur-sm border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image src="/Recipe4You.png" width={50} height={50} alt="Recipe Share Logo"/>
                    <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">Recipe Share</span>
                </Link>
                <div className="flex flex-col">
                    <ul className="flex flex-row text-white">
                        <SearchBar />
                        {navbarComponents.map((component) => (
                            <li key={component.name}>
                                <Link href={component.link} className="mr-4 hover:text-blue-500 transition-all duration-150">{component.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}