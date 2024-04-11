import * as dotenv from 'dotenv';
dotenv.config();

type User = {
  name: string;
  email: string;
  password: string;
};

export const dummyCustomer: User = {
  name: 'Test Account',
  email: 'dummy@example.com',
  password: process.env.PASSWORD!,
};

export const unregisteredUser: User = {
  name: '',
  email: 'unregistered@example.com',
  password: process.env.PASSWORD!,
};
