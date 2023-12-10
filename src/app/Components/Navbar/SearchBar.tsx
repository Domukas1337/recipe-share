import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar() {
    return (
        <div className="mr-4">
            <div className="border-2 rounded-lg flex flex-row items-center bg-white">
                <HiOutlineSearch color="black" size={20}/>
                <input type="text" maxLength={25} placeholder="Search..." className="text-black mx-2 rounded-md outline-none"/>
            </div>
        </div>
    )
}