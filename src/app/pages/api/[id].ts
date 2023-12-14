import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler({req, res} : any) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const page = await prisma.recipe.findUnique({
      where: { id: Number(id) },
    });

    res.json(page);
  } else if (req.method === 'PUT') {
    const { recipeName, ingredientsAll } = req.body;

    const updatedPage = await prisma.recipe.update({
      where: { id: Number(id) },
      data: { recipeName, ingredientsAll },
    });

    res.json(updatedPage);
  } else if (req.method === 'DELETE') {
    const deletedPage = await prisma.recipe.delete({
      where: { id: Number(id) },
    });

    res.json(deletedPage);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
