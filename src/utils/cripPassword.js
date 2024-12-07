import bcrypt from "bcrypt";

const cripPass = async (password) => {
  const saltRounds = 10;
  const pwd = await bcrypt
    .genSalt(saltRounds)
    .then(async (salt) => {
      const pass = await bcrypt.hash(password, salt);
      return pass;
    })
    .catch((err) => console.error(err.message));

  return pwd;
};

export default cripPass;
