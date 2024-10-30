/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsStoID]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsStoID_key" ON "Product"("id", "belongsStoID");
