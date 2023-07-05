import { Module } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { ModulesController } from './usuarios.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [ModulesController],
  providers: [UsuarioService, PrismaService],
})
export class UsuarioModule {}
