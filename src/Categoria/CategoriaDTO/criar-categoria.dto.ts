import { IsNotEmpty, IsString } from 'class-validator';

export class CategoriaDto {
  @IsNotEmpty({ message: 'Este campo nao pode ser vazio' })
  @IsString()
  nome_categoria: string;
}
