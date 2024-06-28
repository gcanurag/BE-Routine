const createError = require("http-errors")
const express = require("express")
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")

const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const classRouter = require("./routes/class")
const adminRouter = require("./routes/admin")
const programRouter = require("./routes/program")

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(cookieParser("process.env.SESSION_SECRET"))
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)

 mongoose.connect(
  "mongodb+srv://anrggc7:AE16VVgFT70PJa9P@cluster0.ovhkx9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
)


const db = mongoose.connection

db.on("error", console.error.bind(console, "XXX DB CONNECTION FAILED XXX"))
db.once("open", function () {
  console.log("[DB CONNECTED]")
})

app.use(logger("dev"))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    key: "userId",
    secret: "process.env.SESSION_SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)
app.use(passport.initialize())
app.use(passport.session())
require("./config/passport")

app.use("/", indexRouter)
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/api/class", classRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  res.status(err.status || 500)
  res.render("error")
})

module.exports = app

