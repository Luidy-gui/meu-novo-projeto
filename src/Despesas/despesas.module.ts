import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { DespesasService } from './despesas.service';
import { DespesasController } from './despesas.controller';

@Module({
  imports: [],
  controllers: [DespesasController],
  providers: [PrismaService, DespesasService],
})
export class DespesaModule {}
