import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { SenhaCriptografada } from '../criptografia/criptografar.senha.usuario';

export class UsuarioDto {
  constructor(private senhaCriptografada: SenhaCriptografada) {}
  @IsNotEmpty({ message: 'o campo nome nao pode ser estar vazio' })
  nome: string;

  @IsNotEmpty()
  @IsEmail(undefined, { message: ' Email invalido!' })
  email: string;

  @MinLength(8, { message: 'a senha precisa conter no minimo 8 caracteres' })
  senha: string;
}
