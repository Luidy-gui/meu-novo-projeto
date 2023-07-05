import { PrismaService } from 'src/db/prisma.service';
import { DespesaDto } from './DespesasDTO/criar-despesa.dto';
import { AtualizarDespesaDto } from './DespesasDTO/atualizar-despesa.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DespesasService {
  constructor(private prisma: PrismaService) {}

  async criarDespesa(data: DespesaDto) {
    const criarDespesa = await this.prisma.despesa.create({
      data,
    });

    return criarDespesa;
  }

  async buscarTodasAsDespesas() {
    const buscarTodasAsDespesas = await this.prisma.despesa.findMany();

    return buscarTodasAsDespesas;
  }

  async buscarUmaDespesa(id: string) {
    const buscarUmaDespesa = await this.prisma.despesa.findFirst({
      where: {
        id: id,
      },
    });

    return buscarUmaDespesa;
  }

  async Data(descricao: string) {
    const buscarDespesaPelaDescricao = await this.prisma.despesa.findMany({
      where: {
        descricao: descricao,
      },
    });
    return buscarDespesaPelaDescricao;
  }

  async buscarUmaDespesaPelaData(data: Date) {
    const buscarDespesaPelaData = await this.prisma.despesa.findFirst({
      where: {
        data: data,
      },
    });
    return buscarDespesaPelaData;
  }

  async atualizarDespesa(id: string, atualizarDespesa: AtualizarDespesaDto) {
    const atualizarDespesaPorID = await this.prisma.despesa.update({
      where: {
        id: id,
      },
      data: {
        descricao: atualizarDespesa.descricao,
        valor: atualizarDespesa.valor,
        categoria_id: atualizarDespesa.categoria_id,
      },
    });

    return atualizarDespesaPorID;
  }

  async deletarDespesa(id: string) {
    const deletarDespesa = await this.prisma.despesa.delete({
      where: {
        id: id,
      },
    });

    return deletarDespesa;
  }
}
