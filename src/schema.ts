import { builder } from './builder';

import './models/Pet';
import './models/User';
import './models/Shelter';

export const schema = builder.toSchema();
