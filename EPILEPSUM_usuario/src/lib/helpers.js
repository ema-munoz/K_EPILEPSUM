const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encryptPassword = async (password) => {
  const salto = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salto);
  return hash;
};

helpers.matchPassword = async (password, savedPaswword) => {
  try {
    return await bcrypt.compare(password, savedPaswword);
  } catch (e) {
    console.log(e);
  }
};

module.exports = helpers;
