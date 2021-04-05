const express = require("express");

const app = express();

const routes = express.Router();

routes.get("/teste", (req, res) => {
  res.json({
    bob: "marley",
  });
});

app.use(express.json());
app.use(routes);

app.listen(
  process.env.PORT || 3333,
  console.log(`Server listening at -> 3333`)
);
