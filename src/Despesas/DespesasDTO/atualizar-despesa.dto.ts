import { PartialType } from '@nestjs/mapped-types';
import { DespesaDto } from './criar-despesa.dto';

export class AtualizarDespesaDto extends PartialType(DespesaDto) {}
