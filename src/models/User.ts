import { builder } from '../builder';
import { prisma } from '../db';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';


builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    password: t.exposeString('password'),
    type: t.exposeString('type'),
    location: t.exposeString('location'),
  }),
});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, context, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.mutationField('register', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
      type: t.arg({
        type: UserType,
        defaultValue: 'INDIVIDUAL',
        required: true,
      }),
      location: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, context, info) => {
      const { name, email, type, location } = args;
      const password = await bcrypt.hash(args.password, 10);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
          type,
          location,
        },
      });
      const token = jwt.sign({ userId: (await user).id }, 'secret-key');

      return user;
    },
  })
);


export const UserType = builder.enumType('UserType', {
  values: ['INDIVIDUAL', 'SHELTER'] as const,
});

// export interface RegisteredUser{
//   name: string
//   email: string
//   type: 'INDIVIDUAL' | 'SHELTER'
//   location: string
//   token: string
// }

