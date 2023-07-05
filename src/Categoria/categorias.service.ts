import { AtualizarCategoriaDto } from './CategoriaDTO/atualizar-categoria';
import { PrismaService } from 'src/db/prisma.service';
import { CategoriaDto } from './CategoriaDTO/criar-categoria.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async criarCategoria(data: CategoriaDto) {
    const criar = await this.prisma.categoria.create({
      data,
    });
    return criar;
  }

  async buscarUmaCategoriaPorId(id: string) {
    const buscar = await this.prisma.categoria.findFirst({
      where: {
        id: id,
      },
    });

    return buscar;
  }

  async buscarTodasAsCategorias() {
    const buscar = await this.prisma.categoria.findMany();

    return buscar;
  }

  async atualizarUmaCategoria(id: string, atualizar: AtualizarCategoriaDto) {
    const atualizarCategoria = await this.prisma.categoria.update({
      where: {
        id: id,
      },
      data: {
        nome_categoria: atualizar.nome_categoria,
      },
    });
    return atualizarCategoria;
  }

  async deletarCategoria(id: string) {
    const deletar = await this.prisma.categoria.delete({
      where: {
        id: id,
      },
    });

    return deletar;
  }
}
