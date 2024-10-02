-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "review" TEXT NOT NULL
);
