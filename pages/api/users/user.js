import nc from "next-connect";
import { connectDB } from "db/connectDB";
import { findUserByEmail } from "db/services/user.services";
import checkAuth from "db/middleware/checkAuth";

const handler = nc({
  onError: (error, req, res) => {},
})
  .use(checkAuth)
  .get(async (req, res) => {
    console.log("req.session", req.session);
    try {
      await connectDB();

      const user = await findUserByEmail(req.session.user.email, {
        password: 0,
      });

      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  });

export default handler;
