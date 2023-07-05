import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './criar-usuario.dto';

export class UpdateModuleDto extends PartialType(UsuarioDto) {}
