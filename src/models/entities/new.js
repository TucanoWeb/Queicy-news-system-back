import * as Sequelize from "sequelize";
import sequelize from "../conn/db.js";

const db = sequelize;

const News = db.define("news", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default News;
