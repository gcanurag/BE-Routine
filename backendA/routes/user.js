const express = require("express")
const passport = require("passport")
const { isLoggedIn, isLoggedOut } = require("../config/auth")
const adminRouter = require("./admin")
const user = require("../Schema/userSchema")
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.use("/admin", adminRouter)


router.post('/register',async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  // console.log(req.body, "register");
  // console.log(identitynumber * 1);
  // return;

  try {
    console.log("anurag");
    if (!username || !email || !password ) {
      res.status(400).json({ msg: "Plese provide all the fiels" });
    }

    const newUser = await user.create({
      username,
      email,
      password: bcrypt.hashSync(password, 8),
      
    });
    console.log("user", newUser);
    res.json({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Something went wrong during registration" });
  }
});

router.post('/login', async (req, res) => {

  const { email, password } = req.body;
  // console.log(req.body,process.env.SECRET);
  // return;
  try {
    if (!email || !password) {
    res.status(400).json({ msg: "Plese provide all the fields" });
  }
    const userDoc = await user.findOne({ email });
    console.log(userDoc);
  if (userDoc) {
    const isMatched = bcrypt.compareSync(password, userDoc.password);
    if (isMatched) {
      const token = jwt.sign({ email: userDoc.email }, process.env.SECRET, {
        expiresIn: "2d",
      });

      res.cookie("cookieToken",token)

      res.json({ authtoken: token, success: "true" });
    }
  } else {
    res.status(400).json("Error during login ");
  }
  } catch (error) {
    console.log(error)
  }
});

exports.getProfile = async (req, res) => {
  const user = req.user;

  res.json({ user: user, success: "true" });
};


router.get("/", isLoggedIn, (req, res) => {
  console.log("user is: ", req.user)
  // res.send(req.user)
  res.render("user", { title: req.user.username })
})


router.post("/login", passport.authenticate("local"), (req, res) => {
  req.session.user = req.user
  res.status(200).send(req.user)
})

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

module.exports = router
