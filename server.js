
import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import flash from "express-flash";
import initializePassport from "./passport-config.js";
// import methodOverride from "method-override";

// if (process.env.NODE_ENV !== 'production') {
//   import { configDotenv } from "dotenv";
//   configDotenv.NODE_ENV
// }

const app = express();
const PORT = 8000;

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);


// Dummy Account no dashbase for users
const users = [
  {
    id: 1,
    email: "demo@email.com",
    password: "demo123",
  },
];

app.set("view-engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(checkUser);
app.use(flash());
app.use(
  session({
    secret: "thisisascret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(methodOverride("_method"));

// Getting the login page
app.get("/", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
    failureFlash: true,
  })
);

// app.use(austhUser)

app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard.ejs");
});

app.post("/logout", (req, res, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect("/");
  });
});
// Checks if user is authenticated
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

// check the user once
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Can't set headers after they are sent to the client
