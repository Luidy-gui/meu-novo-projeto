import { AtualizarReceitaDto } from './ReceitasDTO/atualizar-receita.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitaDto } from './ReceitasDTO/criar-receita.dto';

@Controller('/receita')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  criarReceita(@Body() criarReceitaDto: ReceitaDto) {
    return this.receitasService.criarReceita(criarReceitaDto);
  }

  @Get()
  buscarTodasAsReceitas() {
    return this.receitasService.buscarTodasAsReceitas();
  }

  // @Get('/:id?/:descricao')
  //buscarUmaReceita(@Param('id') id: string, descricao: string) {
  //  return this.receitasService.buscarUmaReceita(id);
  //}

  @Get('/:data')
  buscarUmaReceitaPelaDescricao(@Param('data') data: Date) {
    return this.receitasService.buscarUmaReceitaPelaData(data);
  }

  @Patch('/:id')
  atualizarReceita(
    @Param('id') id: string,
    @Body() atualizarReceitaDto: AtualizarReceitaDto,
  ) {
    return this.receitasService.atualizarReceita(id, atualizarReceitaDto);
  }

  @Delete('/:id')
  deletarReceita(@Param('id') id: string) {
    return this.receitasService.deletarReceita(id);
  }
}
