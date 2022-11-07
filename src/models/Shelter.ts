import { builder } from '../builder';

builder.prismaObject('Shelter', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    pets: t.relation('pets'),
  }),
});
