import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  `postgres://postgres.${process.env.POSTGRES_SUPABASE_KEY}:${process.env.POSTGRES_SUPABASE_PWD}@XXXXXXX`,
  {
    host: `${process.env.POSTGRES_SUPABASE_URL}`,
    dialect: "postgres",
    dialectModule: require("pg"),
    dialectOptions: {
      timezone: "-03:00",
    },
  }
);

export default sequelize;
