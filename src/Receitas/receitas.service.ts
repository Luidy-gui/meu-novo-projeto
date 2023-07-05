import { PrismaService } from 'src/db/prisma.service';
import { ReceitaDto } from './ReceitasDTO/criar-receita.dto';
import { AtualizarReceitaDto } from './ReceitasDTO/atualizar-receita.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceitasService {
  constructor(private prisma: PrismaService) {}

  async criarReceita(data: ReceitaDto) {
    const criarReceita = await this.prisma.receita.create({
      data,
    });

    return criarReceita;
  }

  async buscarTodasAsReceitas() {
    const buscarTodasAsReceitas = await this.prisma.receita.findMany();
    return buscarTodasAsReceitas;
  }

  async buscarUmaReceita(id: string) {
    const buscarUmaReceita = await this.prisma.receita.findFirst({
      where: {
        id: id,
      },
    });
    return buscarUmaReceita;
  }

  async buscarUmaReceitaPelaDescricao(descricao: string) {
    const buscarReceitaPelaDescricao = await this.prisma.receita.findFirst({
      where: {
        descricao: {
          contains: descricao,
        },
      },
    });
    return buscarReceitaPelaDescricao;
  }

  async buscarUmaReceitaPelaData(data: Date) {
    const buscarReceitaPelaData = await this.prisma.receita.findFirst({
      where: {
        data: data,
      },
    });
    return buscarReceitaPelaData;
  }

  async atualizarReceita(
    id: string,
    atualizarInformaçoes: AtualizarReceitaDto,
  ) {
    const atualizarReceita = await this.prisma.receita.update({
      where: {
        id: id,
      },
      data: atualizarInformaçoes,
    });

    return atualizarReceita;
  }

  async deletarReceita(id: string) {
    const deletarReceita = await this.prisma.receita.delete({
      where: {
        id: id,
      },
    });

    return deletarReceita;
  }
}
