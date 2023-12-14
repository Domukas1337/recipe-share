import { PrismaClient } from "@prisma/client";
import RecipePost from "./RecipePost";

const prisma = new PrismaClient();

async function getRecipes() {
    const recipes = await prisma.recipe.findMany();
    return recipes;
}
export default async function MainContent() {
    const recipes = await getRecipes();
    console.log(recipes);
    return (
        <div className="flex flex-col max-w-screen-xl mt-12 mx-auto border-2 border-gray-400">
            {recipes.map((recipe) => (
                <RecipePost key={recipe.id} id={Number(recipe.id)} recipe={recipe.recipeName} />
            ))}
        </div>
    )
}