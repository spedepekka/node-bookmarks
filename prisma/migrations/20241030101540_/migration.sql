/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsStoID,name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_id_belongsStoID_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsStoID_name_key" ON "Product"("id", "belongsStoID", "name");
