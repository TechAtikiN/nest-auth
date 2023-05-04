import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
  name: string
}
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      name: 'Admin'
    },
    {
      id: 2,  
      username: 'user',
      password: 'user',
      name: 'User'
    }
  ]

   async findOne(username: string): Promise<User | undefined>{
    return this.users.find(user=>user.username===username)
  }
}
