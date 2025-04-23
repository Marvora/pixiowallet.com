-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('CUSTOMER', 'MERCHANT');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "AccountRole" NOT NULL DEFAULT 'CUSTOMER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_document_key" ON "Account"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
