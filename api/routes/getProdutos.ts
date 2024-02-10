module.exports = async (app) => {
  const produtos = require("../controllers/produtos.ts");

  const cors = require("cors");
  var corsOptions = {
    origin: "http://localhost:4321",
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));
  app.route("/api/getProdutos")
    .get(async (req, res) => {
      const response = await produtos.getProdutos();
      console.log(response);
      return res.json(response);
    });
};
