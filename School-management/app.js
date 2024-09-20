require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const authRouter = require("./routes/authentification.route");
const newsRoutes = require("./routes/news.route");
const fraisRoutes = require("./routes/frais.route");
const calendrierScolaireRoutes = require("./routes/calendrierScolaire.route");
const formulaireDePreinscriptionRoutes = require("./routes/formulaireDePreinscription.route");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

// Enable All CORS Requests
app.use(cors());
app.use(
  cors({
    origin: ["https://acadie.com.tn", "https://acadie.com.tn/version1"], // Your front-end URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true, // Enable if you need to send cookies
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// Other app.use statements
app.use("/admin", authRouter);
app.use("/api/news", newsRoutes);
app.use("/api/frais", fraisRoutes);
app.use("/api/calendrier-scolaire", calendrierScolaireRoutes);
app.use("/api/formulaire-preinscription", formulaireDePreinscriptionRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
