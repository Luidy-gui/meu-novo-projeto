import { PartialType } from '@nestjs/mapped-types';
import { ReceitaDto } from './criar-receita.dto';

export class AtualizarReceitaDto extends PartialType(ReceitaDto) {}
