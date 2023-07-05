import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/modules/usuarios.module';
import { ReceitaModule } from './Receitas/receitas.module';
import { DespesaModule } from './Despesas/despesas.module';
import { CategoriaModule } from './Categoria/categorias.module';
//import { PrismaService } from './db/prisma.service';
//import { ModulesController } from './usuarios/modules/modules.controller';

@Module({
  imports: [UsuarioModule, ReceitaModule, DespesaModule, CategoriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
