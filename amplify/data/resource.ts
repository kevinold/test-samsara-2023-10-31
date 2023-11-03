import { a, type ClientSchema } from '@aws-amplify/amplify-api-next-alpha';
import { defineData } from '@aws-amplify/backend-graphql';

const schema = a.schema({
  Todo: a.model({
    name: a.string(),
    description: a.string(),
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({ schema });
