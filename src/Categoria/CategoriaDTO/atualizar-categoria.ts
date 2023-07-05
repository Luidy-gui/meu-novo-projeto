import { CategoriaDto } from './criar-categoria.dto';
import { PartialType } from '@nestjs/mapped-types';

export class AtualizarCategoriaDto extends PartialType(CategoriaDto) {}
