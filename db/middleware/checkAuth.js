import { getSession } from "next-auth/react";

const checkAuth = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    console.log("no session");
  } else {
    req.session = session;
    next();
  }
};

export default checkAuth;
