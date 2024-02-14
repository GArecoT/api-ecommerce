module.exports = async (app) => {
  const produtos = require("../controllers/produtos.ts");

  const cors = require("cors");
  var corsOptions = {
    origin: "http://localhost:4321",
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));

  //get produtos route
  app.get("/api/getProdutos", async (req, res) => {
    const response = await produtos.getProdutos();
    console.log(response);
    return res.json(response);
  });

  app.get("/api/getLastProduto", async (req, res) => {
    const response = await produtos.getLastProduto();
    console.log(response);
    return res.json(response);
  });

  //post produto route
  app.post("/api/postProduto", async (req, res) => {
    res.send(await produtos.postProduto(req));
  });
};
