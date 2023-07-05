import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/criar-usuario.dto';
import { UpdateModuleDto } from './dto/atualizar-usuario.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(data: UsuarioDto) {
    const criarUsuario = this.prisma.usuario.create({
      data,
    });
    return criarUsuario;
  }

  async findMany() {
    const bucarTodosOsUsarios = await this.prisma.usuario.findMany();
    return bucarTodosOsUsarios;
  }

  async findOne(id: string) {
    const buscarUmUsuarioPorID = await this.prisma.usuario.findFirst({
      where: {
        id,
      },
    });
    return buscarUmUsuarioPorID;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    const usuarioExiste = this.prisma.usuario.findFirst({
      where: {
        id: id,
      },
    });

    if (usuarioExiste === null) {
      return console.log('O Usuario Nao existe!');
    } else {
      const atualizarDadosDoUsuario = await this.prisma.usuario.update({
        where: {
          id,
        },
        data: {
          nome: updateModuleDto.nome,
          email: updateModuleDto.email,
          senha: updateModuleDto.senha,
        },
      });
      return atualizarDadosDoUsuario;
    }
  }

  async deletarUsuario(id: string) {
    const deletarUmUsuarioPorID = await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
    return deletarUmUsuarioPorID;
  }
}
