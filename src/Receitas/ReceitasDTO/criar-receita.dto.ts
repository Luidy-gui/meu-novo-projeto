import { IsNotEmpty, IsString } from 'class-validator';

export class ReceitaDto {
  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  descricao: string;

  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  valor: number;

  @IsString({ message: 'Este campo nao pode estar vazio' })
  categoria_id: string;
}
