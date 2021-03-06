
const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { name, password, role, email } = req.body;

  try {
    const user = new User({ name, password, role, email });
    console.log(user);

    const userDB = await user.save();

    res.status(200).json({ userDB });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});



module.exports = router