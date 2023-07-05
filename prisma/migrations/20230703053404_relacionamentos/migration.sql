-- AlterTable
ALTER TABLE `despesas` ADD COLUMN `usuario_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `receitas` ADD COLUMN `usuario_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `despesas` ADD CONSTRAINT `despesas_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
