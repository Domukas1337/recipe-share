import Link from "next/link"
import Image from "next/image"

export default function RecipePost({id, recipe, image}: any) {
    return (
        <div className="">
            <div className="">
                <div className="text-3xl">
                    <Link href={`/recipes/${id}`}>{recipe}</Link>
                </div>
            </div> 
        </div>
    )
}  