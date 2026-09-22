import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

console.log(
  "POSTGRESQL_URL loaded:",
  Boolean(process.env.POSTGRESQL_URL)
);

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRESQL_URL,
    },
});
