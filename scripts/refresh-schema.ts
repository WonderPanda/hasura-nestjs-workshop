import fetch from 'node-fetch';
import { config } from 'dotenv';
import * as z from 'zod';

config();

const hasuraSchema = z
  .object({
    HASURA_HOST_PORT: z.string().nonempty(),
    HASURA_GRAPHQL_ADMIN_SECRET: z.string().nonempty(),
  })
  .nonstrict();

const hasuraConfig = hasuraSchema.parse(process.env);

const body = {
  type: 'reload_remote_schema',
  args: {
    name: 'nestjs',
  },
};

fetch(`http://localhost:${hasuraConfig.HASURA_HOST_PORT}/v1/query`, {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': hasuraConfig.HASURA_GRAPHQL_ADMIN_SECRET,
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
