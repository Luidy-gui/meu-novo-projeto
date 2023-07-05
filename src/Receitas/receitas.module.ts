import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
//import { ModulesController } from './usuarios/modules/modules.controller';

@Module({
  imports: [],
  controllers: [ReceitasController],
  providers: [PrismaService, ReceitasService],
})
export class ReceitaModule {}
