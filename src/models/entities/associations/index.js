import News from "../new.js";
import User from "../user.js";

// news
News.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(News, { foreignKey: "id_user" });

export { News, User };
