-- CreateTable
CREATE TABLE "publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book_category" (
    "id" TEXT NOT NULL,

    CONSTRAINT "book_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bookCategoryId" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_book_categoryTobooks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "publisher_email_key" ON "publisher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_bookCategoryId_key" ON "categories"("bookCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "_book_categoryTobooks_AB_unique" ON "_book_categoryTobooks"("A", "B");

-- CreateIndex
CREATE INDEX "_book_categoryTobooks_B_index" ON "_book_categoryTobooks"("B");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_bookCategoryId_fkey" FOREIGN KEY ("bookCategoryId") REFERENCES "book_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_categoryTobooks" ADD CONSTRAINT "_book_categoryTobooks_A_fkey" FOREIGN KEY ("A") REFERENCES "book_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_categoryTobooks" ADD CONSTRAINT "_book_categoryTobooks_B_fkey" FOREIGN KEY ("B") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;
