import { IsDecimal, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DespesaDto {
  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  descricao: string;

  @IsNotEmpty({ message: 'Este campo nao pode estar vazio' })
  @IsDecimal()
  valor: number;

  @IsString()
  @IsOptional()
  categoria_id: string;
}
