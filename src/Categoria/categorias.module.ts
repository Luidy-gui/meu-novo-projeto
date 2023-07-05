import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CategoriaService } from './categorias.service';
import { CategoriaController } from './categorias.controller';

@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [PrismaService, CategoriaService],
})
export class CategoriaModule {}
