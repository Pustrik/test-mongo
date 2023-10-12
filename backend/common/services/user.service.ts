import User, { IUser } from '../mongo/schemas/user.schema';
import { CreateUserDto } from '../dto/user.dto';

export default class UserService {
  constructor() {}

  createUser = async (user: CreateUserDto): Promise<IUser> => {
    const newUser = new User(user);
    return newUser.save();
  };
}
