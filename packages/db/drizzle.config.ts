import type { Config } from 'drizzle-kit';

import dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/schema.ts',
  out: './.migrations',
  dbCredentials: {
    connectionString:
      'mysql://51nndtjkjp91ultx8d4i:pscale_pw_u69nastaWyxc9iQn8kPtGarnxpwtGtFF5BiWN24SKGO@aws.connect.psdb.cloud/shortlinks_live_db_0?ssl={"rejectUnauthorized":true}'
  },
  driver: 'mysql2',
  breakpoints: true
} satisfies Config;
