import * as bcrypt from 'bcrypt';

export class SenhaCriptografada {
  async Criptografar(senha: string) {
    const saltOrRounds = 10;
    senha = 'random_password';
    const hash = await bcrypt.hash(senha, saltOrRounds);
    return hash;
  }
}
