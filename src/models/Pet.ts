import { builder } from '../builder';
import { prisma } from '../db';

builder.prismaObject('Pet', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    age: t.exposeInt('age'),
    type: t.exposeString('type'),
    gender: t.exposeString('gender'),
    location: t.exposeString('location'),
    shelter: t.relation('shelter'),
    photo: t.exposeString('photo'),
    breed: t.expose('breed', {
      type: 'String',
      nullable: true,
    }),
    vaccinated: t.expose('vaccinated', {
      type: 'Boolean',
      nullable: true,
    }),
    neutered: t.expose('neutered', {
      type: 'Boolean',
      nullable: true,
    }),
    adopted: t.expose('adopted', {
      type: 'Boolean',
      nullable: true,
    }),
  }),
});

builder.queryField('allPets', (t) =>
  t.prismaField({
    type: ['Pet'],
    resolve: async (query, root, args, context, info) => {
      return prisma.pet.findMany({});
    },
  })
);

builder.queryField('petsByLocation', (t) =>
  t.prismaField({
    type: ['Pet'],
    args: {
      location: t.arg.string(),
    },
    resolve: async (query, root, args, context, info) => {
      const { location } = args;

      return prisma.pet.findMany({
        where: { location: { contains: location as string } },
      });
    },
  })
);
builder.queryField('petsByType', (t) =>
  t.prismaField({
    type: ['Pet'],
    args: {
      type: t.arg.string(),
    },
    resolve: async (query, root, args, context, info) => {
      const { type } = args;

      return prisma.pet.findMany({
        where: { type: { equals: type as string } },
      });
    },
  })
);
