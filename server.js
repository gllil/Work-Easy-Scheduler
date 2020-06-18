const routes = require("./routes");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

//const admin = require('./routes/adminRoutes');
const users = require("./routes/api/user");
const adminUsers = require("./routes/api/userAdmin");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/adminusers", adminUsers);

const db = process.env.MONGODB_URI || require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

//app.use('/admin',admin);
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//app.listen(3000,() => console.log('Server Started'))
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
