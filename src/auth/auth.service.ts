import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UserDocument } from './schema/auth.schema';
import { hash } from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(userObject:RegisterAuthDto) {
    const { password } = userObject; //this is plain text, must hash it.
    const plainToHash = await hash(password, 10); // password crypt
    userObject = {... userObject, password: plainToHash}
    return this.userModel.create(userObject)

  }

  login() {}
}
