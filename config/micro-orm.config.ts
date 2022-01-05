import { MikroORM } from "@mikro-orm/core";

export const orm = async function () {
  await MikroORM.init({
    entities: ['../entities'],
    type: 'postgresql',
    host: process.env.MIKRO_ORM_HOST,
    port: Number(process.env.MIKRO_ORM_PORT),
    user: process.env.MIKRO_ORM_USER,
    password: process.env.MIKRO_ORM_PASSWORD,
    dbName: process.env.MIKRO_ORM_DB_NAME
  });
};