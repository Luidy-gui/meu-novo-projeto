import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AtualizarDespesaDto } from './DespesasDTO/atualizar-despesa.dto';
import { DespesaDto } from './DespesasDTO/criar-despesa.dto';
import { DespesasService } from './despesas.service';

@Controller('/despesa')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  criarDespesa(@Body() criarDespesa: DespesaDto) {
    return this.despesasService.criarDespesa(criarDespesa);
  }

  @Get()
  buscarTodasAsDespesas() {
    return this.despesasService.buscarTodasAsDespesas();
  }

  @Get('/:id')
  buscarUmaDespesa(@Param('id') id: string) {
    return this.despesasService.buscarUmaDespesa(id);
  }

  @Patch('/:id')
  atualizarDespesa(
    @Param('id') id: string,
    @Body() atualizarDespesa: AtualizarDespesaDto,
  ) {
    return this.despesasService.atualizarDespesa(id, atualizarDespesa);
  }

  @Delete('/:id')
  deletarDespesa(@Param('id') id: string) {
    return this.despesasService.deletarDespesa(id);
  }
}
