import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { CategoriaDto } from './CategoriaDTO/criar-categoria.dto';
import { AtualizarCategoriaDto } from './CategoriaDTO/atualizar-categoria';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  criarCategoria(@Body() dadosDaCategoria: CategoriaDto) {
    return this.categoriaService.criarCategoria(dadosDaCategoria);
  }

  @Get()
  buscarTodasCategorias() {
    return this.categoriaService.buscarTodasAsCategorias();
  }

  @Get('/:id')
  buscarUmaCategoria(@Param() id: string) {
    return this.categoriaService.buscarUmaCategoriaPorId(id);
  }

  @Patch('/:id')
  atualizarCategoria(
    @Param() id: string,
    dadosParaAtualizar: AtualizarCategoriaDto,
  ) {
    return this.categoriaService.atualizarUmaCategoria(id, dadosParaAtualizar);
  }

  @Delete('/:id')
  deletarCategoria(@Param('id') id: string) {
    return this.categoriaService.deletarCategoria(id);
  }
}
