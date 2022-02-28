import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private UsersRepository: UsersRepository,
  ) {}

  async signUp(authCredential: AuthCredentialsDto): Promise<void> {
    return this.UsersRepository.createUser(authCredential);
  }
}
