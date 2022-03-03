import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  // mock data from db
  private readonly user: User[] = [
    {
      id: 1,
      name: 'Ben',
      username: 'Ben',
      password: 'sth-like-bcrypt-hashed-pwd',
    },
    {
      id: 2,
      name: 'Ben2',
      username: 'Ben2',
      password: 'sth-like-bcrypt-hashed-pwd2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.user.find((user) => user.username === username);
  }
}
