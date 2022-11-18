const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyparser = require("body-parser");
const http = require("http");

const { database } = require("./key");

const app = express();
require("./lib/passport");

const handlebars = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  extname: ".hbs",
  helpres: require("./lib/handlebars"),
});

/// archivos compartidos
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
/// archivos compartidos

//midlewars
app.use(morgan("dev"));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  session({
    secret: "EPILEPSUM",
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales

app.use((req, res, next) => {
  app.locals.menssage = req.flash("menssage");
  app.locals.success = req.flash("success");
  app.locals.user = req.user;
  next();
});
//varible globales

//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routes
app.use(require("./routes/index"));
app.use(require("./routes/registro"));
app.use(require("./routes/actualizacion"));
app.use(require("./routes/user"));
app.use("/proyecto", require("./routes/proyectoRutas"));
app.use("/efectosSecundarios", require("./routes/efectosSecundariosRutas"));
app.use("/tipoEpilepsia", require("./routes/tipoEpilepsiaRutas"));
app.use("/sintomas", require("./routes/sintomasRutas"));
app.use("/permisos", require("./routes/permisos"));
app.use("/roles", require("./routes/roles"));
app.use("/usuarios", require("./routes/usuarios"));
//routes

module.exports = app;
