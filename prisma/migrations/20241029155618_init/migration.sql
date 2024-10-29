-- CreateEnum
CREATE TYPE "PRODUCT_STATUS" AS ENUM ('TO_BUY', 'BOUGHT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "belongsStoID" TEXT NOT NULL,
    "status" "PRODUCT_STATUS" NOT NULL DEFAULT 'TO_BUY',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsStoID_fkey" FOREIGN KEY ("belongsStoID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
