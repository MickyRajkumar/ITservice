import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await client.users.findMany();
    return res.status(200).json(users);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: 'something went wrong' });
    // if (
    //   error.meta.target === 'users_email_key' &&
    //   error.name === 'PrismaClientKnownRequestError' &&
    //   error.code === 'P2002'
    // ) {
    //   const uniqueField = error.meta.target;
    //   const errorMessage = `The ${uniqueField} field must be unique.`;
    //   return res.status(500).json({ message: errorMessage });
    // }
  }
}
