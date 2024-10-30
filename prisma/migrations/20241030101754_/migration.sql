/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsStoID]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,belongsStoID]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_id_belongsStoID_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsStoID_key" ON "Product"("id", "belongsStoID");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_belongsStoID_key" ON "Product"("name", "belongsStoID");
