import User from "db/models/userModel";

export const userExists = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

export const findUserByEmail = async (email, select) => {
  const user = await User.findOne({ email }).select(select);

  return user;
};
