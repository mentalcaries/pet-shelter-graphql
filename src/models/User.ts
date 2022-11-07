import { builder } from '../builder';
import { prisma } from '../db';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    type: t.exposeString('type'),
    location: t.exposeString('location'),
  }),
});

builder.queryField("users", (t) => t.prismaField({
  type: ["User"],
  resolve: async (query, root, args, context, info) => {
    return prisma.user.findMany({...query})
  }
})
)