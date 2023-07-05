/*
  Warnings:

  - You are about to drop the column `categoria` on the `despesas` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `receitas` table. All the data in the column will be lost.
  - Added the required column `categoria_id` to the `despesas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria_id` to the `receitas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `despesas` DROP COLUMN `categoria`,
    ADD COLUMN `categoria_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `receitas` DROP COLUMN `categoria`,
    ADD COLUMN `categoria_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `despesas` ADD CONSTRAINT `despesas_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
