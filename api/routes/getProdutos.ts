module.exports = (app) => {
  const controller = require("../controllers/getProdutos.ts");

  const cors = require("cors");
  var corsOptions = {
    origin: "http://localhost:4321",
    optionsSuccessStatus: 200, // For legacy browser support
  };

  app.use(cors(corsOptions));
  app.route("/api/getProdutos")
    .get(controller());
};
