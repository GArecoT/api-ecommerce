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

  //post produto route
  app.post("/api/post", (req, res) => {
    res.send(produtos.postProduto(req));
  });
};
