import {
  PlanetScalePreparedQueryHKT,
  PlanetscaleQueryResultHKT,
  drizzle
} from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import Models from './models';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import dotenv from 'dotenv';
dotenv.config();

const connection = connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

console.log({
  host: process.env,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

const DB = drizzle(connection);

export default DB;

type Transaction = MySqlTransaction<
  PlanetscaleQueryResultHKT,
  PlanetScalePreparedQueryHKT,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;

export { Models, type Transaction };
