-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountName" TEXT,
    "recipeName" TEXT NOT NULL,
    "ingredientsAll" TEXT NOT NULL
);
