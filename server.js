const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
