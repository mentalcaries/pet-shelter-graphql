import { builder } from '../builder';

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
