import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/db';
import { PrismaClient, Prisma } from '@prisma/client';

// import { PrismaClient } from '@prisma/client';

// const client = new PrismaClient();

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = req.body;
  try {
    await prisma.users
      .create({
        data: {
          name: name,
          email: email
        }
      })
      .then(res => console.log('res', res));

    return res.status(201).send({ message: 'created' });
  } catch (error: any) {
    if (
      error.meta?.target === 'users_email_key' &&
      error.name === 'PrismaClientKnownRequestError' &&
      error.code === 'P2002'
    ) {
      const uniqueField = error.meta.target;
      const errorMessage = `The ${uniqueField} field must be unique.`;
      return res.status(403).send({ message: errorMessage, status: 403 });
    }
  }
}
