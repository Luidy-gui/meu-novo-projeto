import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { UsuarioDto } from './dto/criar-usuario.dto';
import { UpdateModuleDto } from './dto/atualizar-usuario.dto';

@Controller('/usuario')
export class ModulesController {
  constructor(private readonly modulesService: UsuarioService) {}

  @Post()
  create(@Body() createModuleDto: UsuarioDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  findMany() {
    return this.modulesService.findMany();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.modulesService.update(id, updateModuleDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.modulesService.deletarUsuario(id);
  }
}
